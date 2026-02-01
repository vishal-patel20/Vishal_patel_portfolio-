import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

// Fallback file storage path
const STORAGE_DIR = join(process.cwd(), "data");
const CONTACTS_FILE = join(STORAGE_DIR, "contacts.json");

// Try MongoDB, fallback to file storage
async function saveContact(contactData) {
    // Try MongoDB first
    try {
        console.log("🔌 Attempting MongoDB connection...");
        const clientPromise = (await import("@/lib/mongodb")).default;
        const client = await clientPromise;
        const db = client.db("portfolio");
        const collection = db.collection("contacts");

        console.log("✅ MongoDB connected successfully");
        const result = await collection.insertOne(contactData);
        console.log("✅ Saved to MongoDB with ID:", result.insertedId);

        return { success: true, storage: "mongodb", id: result.insertedId };
    } catch (mongoError) {
        console.warn("⚠️ MongoDB failed, using file storage fallback");
        console.warn("MongoDB error:", mongoError.message);

        // Fallback to file storage
        try {
            // Ensure data directory exists
            if (!existsSync(STORAGE_DIR)) {
                await mkdir(STORAGE_DIR, { recursive: true });
            }

            // Read existing contacts or create new array
            let contacts = [];
            if (existsSync(CONTACTS_FILE)) {
                const fileContent = await readFile(CONTACTS_FILE, "utf-8");
                contacts = JSON.parse(fileContent);
            }

            // Add new contact with ID
            const newContact = {
                ...contactData,
                id: Date.now().toString(),
            };
            contacts.push(newContact);

            // Save to file
            await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
            console.log("✅ Saved to file storage with ID:", newContact.id);

            return { success: true, storage: "file", id: newContact.id };
        } catch (fileError) {
            console.error("❌ File storage also failed:", fileError.message);
            throw new Error("Both MongoDB and file storage failed");
        }
    }
}

export async function POST(request) {
    console.log("📧 Contact form submission received");

    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, subject, message } = body;

        console.log("📝 Form data:", { name, email, subject: subject || "(empty)", messageLength: message?.length });

        // Validate required fields
        if (!name || !email || !message) {
            console.error("❌ Validation failed: Missing required fields");
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.error("❌ Validation failed: Invalid email format");
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Prepare the contact document
        const contactDocument = {
            name,
            email,
            subject: subject || "",
            message,
            submittedAt: new Date().toISOString(),
            ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
        };

        console.log("💾 Saving contact...");

        // Save with fallback
        const result = await saveContact(contactDocument);

        console.log(`✅ Contact saved successfully via ${result.storage}`);

        return NextResponse.json(
            {
                success: true,
                message: "Contact form submitted successfully",
                id: result.id,
                storage: result.storage,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Error processing contact form:");
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);

        return NextResponse.json(
            {
                error: "Failed to save contact. Please try again.",
                details: process.env.NODE_ENV === "development" ? error.message : undefined
            },
            { status: 500 }
        );
    }
}

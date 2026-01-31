import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("portfolio"); // You can change the database name
        const collection = db.collection("contacts");

        // Prepare the document to insert
        const contactDocument = {
            name,
            email,
            subject: subject || "",
            message,
            submittedAt: new Date(),
            ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
        };

        // Insert the document
        const result = await collection.insertOne(contactDocument);

        return NextResponse.json(
            {
                success: true,
                message: "Contact form submitted successfully",
                id: result.insertedId,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

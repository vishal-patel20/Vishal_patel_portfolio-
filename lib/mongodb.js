import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

// MongoDB connection options with proper timeouts and TLS configuration
const options = {
    serverSelectionTimeoutMS: 10000, // Timeout after 10s instead of 30s
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
    minPoolSize: 2,
    retryWrites: true,
    retryReads: true,
    w: 'majority',
    // TLS/SSL configuration for MongoDB Atlas
    tls: true,
    tlsAllowInvalidCertificates: process.env.NODE_ENV === 'development', // Only in dev
    tlsAllowInvalidHostnames: process.env.NODE_ENV === 'development',
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global;

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect()
            .then((client) => {
                console.log("✅ MongoDB connected successfully in development mode");
                return client;
            })
            .catch((error) => {
                console.error("❌ MongoDB connection failed:", error.message);
                throw error;
            });
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect()
        .then((client) => {
            console.log("✅ MongoDB connected successfully in production mode");
            return client;
        })
        .catch((error) => {
            console.error("❌ MongoDB connection failed:", error.message);
            throw error;
        });
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

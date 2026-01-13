import { MongoClient, Db } from "mongodb";

const MONGO_DB_URI = process.env.MONGO_DB_URI || "";
const DB_NAME = process.env.DB_NAME || "";

if (!MONGO_DB_URI) {
  throw new Error("Please define the MONGO_DB_URI environment variable");
}

if (!DB_NAME) {
  throw new Error("Please define the DB_NAME environment variable");
}

// Global is used here to maintain a cached connection across hot reloads
// in development. This prevents connections growing exponentially
// during API Route usage.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Always use production mode - create a single client instance
if (!global._mongoClient) {
  global._mongoClient = new MongoClient(MONGO_DB_URI, {
    maxPoolSize: 10, // Maintain up to 10 socket connections
    minPoolSize: 2, // Maintain at least 2 socket connections
    serverSelectionTimeoutMS: 5000, // How long to try selecting a server
    socketTimeoutMS: 45000, // How long a send or receive on a socket can take before timeout
  });
}
client = global._mongoClient;
clientPromise = client.connect();

/**
 * Get a MongoDB client instance (reused across requests)
 * Uses connection pooling for optimal performance
 */
export async function getMongoClient(): Promise<MongoClient> {
  return clientPromise;
}

/**
 * Get the pepecare database
 */
export async function getDatabase(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(DB_NAME);
}
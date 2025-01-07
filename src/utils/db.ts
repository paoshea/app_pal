
import { MongoClient } from 'mongodb';
import { toast } from 'sonner';

const client = new MongoClient(process.env.MONGODB_URI || '');

export async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(process.env.DB_NAME || 'projectmanager');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    toast.error('Database connection failed');
    throw error;
  }
}

export function getClient() {
  return client;
}

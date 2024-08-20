import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(import.meta.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const DATABASE_ID = import.meta.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
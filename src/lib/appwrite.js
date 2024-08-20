import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('66c1f5c9000dae8a3ecc');              // Your project ID

export const databases = new Databases(client);

export const DATABASE_ID = 'blog_db';
export const COLLECTION_ID = '66c1f64c0037db2953d1';
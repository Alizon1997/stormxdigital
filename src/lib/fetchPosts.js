import { databases, DATABASE_ID, COLLECTION_ID } from './appwrite';

export async function fetchPosts() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
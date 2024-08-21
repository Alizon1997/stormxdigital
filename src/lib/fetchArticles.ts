import { databases, DATABASE_ID, COLLECTION_ID } from './appwrite';
import type { Models } from 'appwrite';

export interface Article {
  id: string;
  type: string;
  title: string;
  publish_date: string;
  brief: string;
  author: string;
  authorImage: string;
}

function mapDocumentToArticle(doc: Models.Document): Article {
  return {
    id: doc.$id,
    type: doc.type || '',
    title: doc.title || '',
    publish_date: doc.publish_date || '',
    brief: doc.brief || '',
    author: doc.author || '',
    authorImage: doc.authorImage || '',
  };
}

export async function fetchPosts(): Promise<Article[]> {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents.map(mapDocumentToArticle);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error(`Failed to fetch posts:`);
  }
}
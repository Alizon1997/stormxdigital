import type { APIRoute } from 'astro';
import { Client, Databases } from "appwrite";

export const POST: APIRoute = async ({ request }) => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c1f5c9000dae8a3ecc');

  const databases = new Databases(client);
  const DATABASE_ID = 'blog_db';
  const COLLECTION_ID = '66c1f64c0037db2953d1';

  try {
    const { documentId, title, description, author, publish_date } = await request.json();
    
    // Decode the description
    const decodedDescription = decodeURIComponent(escape(atob(description)));

    await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId,
      {
        title,
        description: decodedDescription,
        author,
        publish_date
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Server-side error updating post:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to update post',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

// Astro needs this to recognize the file as an API route
export const prerender = false;
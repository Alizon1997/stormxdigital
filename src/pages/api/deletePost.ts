// src/pages/api/deletePost.ts
import type { APIRoute } from 'astro';
import { Client, Databases } from "appwrite";

export const POST: APIRoute = async ({ request }) => {
  console.log("Received POST request to /api/deletePost");

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c1f5c9000dae8a3ecc');

  const databases = new Databases(client);
  const DATABASE_ID = 'blog_db';
  const COLLECTION_ID = '66c1f64c0037db2953d1';

  try {
    const text = await request.text();
    console.log("Request body:", text);

    if (!text) {
      throw new Error("Request body is empty");
    }

    const { documentId } = JSON.parse(text);
    
    console.log("Parsed request data:", { documentId });

    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://stormxdigital.vercel.app',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    console.error('Server-side error deleting post:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to delete post',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://stormxdigital.vercel.app',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }
};

export const prerender = false;
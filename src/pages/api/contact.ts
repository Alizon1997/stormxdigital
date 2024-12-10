import type { APIRoute } from 'astro';
import { sendEmail } from '../../lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const result = await sendEmail(data);

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error sending email'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

export const prerender = false;
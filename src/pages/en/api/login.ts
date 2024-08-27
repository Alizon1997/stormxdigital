import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request, cookies }) => {
  const body = await request.json();
  const { username, password } = body;

  // Replace with your actual authentication logic
  if (username === 'admin' && password === 'password') {
    cookies.set('adminLoggedIn', 'true', {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ success: false }), {
      status: 401,
    });
  }
};
export function onRequest({ locals, request }, next) {
    const url = new URL(request.url);
    const [, lang] = url.pathname.split('/');
    if (lang === 'en' || lang === 'it') {
      locals.lang = lang;
    } else {
      locals.lang = 'en'; // default to English
    }
    return next();
  }
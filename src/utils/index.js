export function getLanguageFromURL(pathname) {
    const langCodeMatch = pathname.match(/\/([a-z]{2})\//);
    return langCodeMatch ? langCodeMatch[1] : null;
  }
export function getQueryItem(query: object, key: string) {
  if (!query.hasOwnProperty(key)) {
    return '';
  }

  const item = query[key];

  return (Array.isArray(item) ? item : [item]).join(' ').trim();
}

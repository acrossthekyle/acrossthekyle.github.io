export function getPostParameters(route: string) {
  const uri = route.split('/posts/')[1];
  const parts = uri.split('/');

  const id = parts[0].split('#')[0];
  const day = parts.length > 1 ? Number(parts[1]) : -1;

  return {
    id,
    day,
  };
}

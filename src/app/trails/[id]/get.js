import albums from '@/db/albums';
import trails from '@/db/trails';

export default async function get(id) {
  const foundIndex = trails.findIndex(trail => trail.id === id);

  let more = [];

  if (foundIndex === 0) {
    more = trails.slice(foundIndex + 1, foundIndex + 4);
  } else if (foundIndex === trails.length - 1) {
    more = trails.slice(foundIndex - 3, foundIndex);
  } else if (foundIndex === trails.length - 2) {
    more = [trails[trails.length - 1], ...trails.slice(foundIndex - 2, foundIndex)];
  } else {
    more = [trails[foundIndex - 1], ...trails.slice(foundIndex + 1, foundIndex + 3)];
  }

  const photos = albums.find((album) => album.id === trails[foundIndex].albumId)?.images.length ?? 0;

  try {
    const trail = await import(`@/db/cache/trails/${id}.js`);

    return {
      more,
      photos,
      trail: trail.default,
    };
  } catch {
    return null;
  }
};

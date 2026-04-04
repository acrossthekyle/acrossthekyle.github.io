import albums from '@/db/albums';

export default function get(id) {
  const foundIndex = albums.findIndex((album) => album.id === id) ?? 0;
  const album = albums.find((album) => album.id === id);

  if (album === undefined) {
    return null;
  }

  return {
    album,
    index: albums.length - foundIndex,
  };
};

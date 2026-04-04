import albums from '@/db/albums';

export default function get(id, img) {
  const album = albums.find((album) => album.id === id) ?? null;

  if (album === null) {
    return null;
  }

  const image = album.images.find((image) => image.src.split('-').pop() === img) ?? null;
  const foundIndex = album.images.findIndex((image) => image.src.split('-').pop() === img) ?? 0;

  if (image === null) {
    return null;
  }

  return {
    album: {
      id: album.id,
      title: album.title,
    },
    image,
    index: album.images.length - foundIndex,
  };
};

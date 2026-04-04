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

  const next = foundIndex === album.images.length - 1 ? null : foundIndex + 1;
  const previous = foundIndex === 0 ? null : foundIndex - 1;

  return {
    album: {
      id: album.id,
      title: album.title,
    },
    image,
    index: foundIndex,
    next: next !== null ? album.images[next].src.split('-').pop() : null,
    previous: previous !== null ? album.images[previous].src.split('-').pop() : null,
  };
};

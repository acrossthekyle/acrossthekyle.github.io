import collections from '@/cache/collections';
import images from '@/cache/images';

export async function get(id) {
  const index = collections.findIndex(item => item.id.toLowerCase() === id);

  if (index < 0) {
    return null;
  }

  const next = collections[index === collections.length - 1 ? collections.length - 1 : index + 1];
  const previous = collections[index === 0 ? collections.length - 1 : index - 1];

  return {
    collection: collections[index],
    images: images.filter((image) => image.collectionId.toLowerCase() === id),
    next,
    previous,
  };
};

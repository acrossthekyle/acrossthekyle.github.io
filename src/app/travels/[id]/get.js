import collections from '@/cache/collections';
import images from '@/cache/images';

export async function get(id) {
  const index = collections.findIndex(item => item.id.toLowerCase() === id);

  if (index < 0) {
    return null;
  }

  return {
    collection: collections[index],
    collections,
    images: images.filter((image) => image.collectionId.toLowerCase() === id),
  };
};

import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id) {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    return null;
  }

  const index = collections.filter(({ count }) => count > 0).findIndex((collection) => collection.id === id);

  if (index < 0) {
    return null;
  }

  return {
    collection,
    images: images.filter((image) => image.collectionId === id),
    index,
  };
};

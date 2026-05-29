import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id) {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    return null;
  }

  return {
    collection,
    images: images.filter((image) => image.collection.id === id),
  };
};

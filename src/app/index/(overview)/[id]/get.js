import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id) {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    return null;
  }

  const items = images.filter((image) => image.collectionId === id);

  return {
    collection,
    images: Array.from({ length: Math.ceil(items.length / 3) }, (_, index) =>
      items.slice(index * 3, index * 3 + 3)
    ),
  };
};

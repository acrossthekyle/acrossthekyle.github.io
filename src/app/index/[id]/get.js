import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id) {
  const filtered = images.filter((image) => image.collectionId.toLowerCase() === id);

  if (filtered.length === 0) {
    return null;
  }

  const collection = collections.find(item => item.id.toLowerCase() === id)

  if (!collection) {
    return null;
  }

  return {
    images: filtered,
    collection,
  };
};

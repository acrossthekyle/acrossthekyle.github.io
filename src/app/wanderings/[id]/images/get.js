import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id, ref) {
  const filtered = images.filter((image) => image.collectionId.toLowerCase() === id);

  if (filtered.length === 0) {
    return null;
  }

  const index = filtered.findIndex((image) => image.id.toLowerCase() === ref);

  if (index < 0) {
    return null;
  }

  const collection = collections.find(item => item.id.toLowerCase() === id)

  if (!collection) {
    return null;
  }

  return {
    all: filtered,
    collection,
    image: filtered[index],
    index,
    total: filtered.length,
  };
};

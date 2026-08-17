import collections from '@/cache/collections';
import images from '@/cache/images';

export async function get(collectionId, src) {
  const collection = collections.find(item => item.id.toLowerCase() === collectionId);
  const all = images.filter((image) => image.collectionId.toLowerCase() === collectionId);

  const index = all.findIndex(item => item.id.toLowerCase() === src);

  if (!collection) {
    return null;
  }

  if (index < 0) {
    return null;
  }

  const total = all.length;

  const next = index === total - 1 ? 0 : index + 1;
  const previous = index === 0 ? total - 1 : index - 1;

  return {
    collection,
    image: all[index],
    index,
    next: all[next].id,
    previous: all[previous].id,
    total,
  };
};

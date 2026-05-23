import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get(id) {
  const collection = collections.find((collection) => collection.id === id);

  if (!collection) {
    return null;
  }

  const index = collections.findIndex((collection) => collection.id === id) + 1;

  const data = images.filter((image) => image.collection.id === id);

  const chunks = [];

  for (let i = 0; i < data.length; i += 3) {
    chunks.push(data.slice(i, i + 3));
  }

  return {
    collection,
    images: chunks,
    index,
  };
};

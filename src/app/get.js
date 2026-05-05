import collections from '@/cache/collections';
import images from '@/cache/images';

export default async function get() {
  return {
    collections: collections.map((collection) => ({
      ...collection,
      cover: collection.cover[Math.floor(Math.random() * collection.cover.length)],
    })),
    images,
  };
};

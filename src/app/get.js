import collections from '@/cache/collections';

export default async function get() {
  return collections.filter(({ count }) => count > 0);
};

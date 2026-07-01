import collections from '@/cache/collections';

export async function get() {
  return collections.filter(({ count }) => count > 0);
};

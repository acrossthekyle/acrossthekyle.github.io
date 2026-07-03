import collections from '@/cache/collections';
import images from '@/cache/images';

function chunkByPattern(input) {
  const pattern = [2, 1, 2, 1, 1];
  const result = [];
  let index = 0;
  let patternIndex = 0;

  while (index < input.length) {
    const chunkSize = pattern[patternIndex];

    result.push(input.slice(index, index + chunkSize));

    index += chunkSize;

    patternIndex = (patternIndex + 1) % pattern.length;
  }

  return result;
}

export async function get(id) {
  const filtered = images.filter((image) => image.collectionId.toLowerCase() === id);

  if (filtered.length === 0) {
    return null;
  }

  const collection = collections.find(item => item.id.toLowerCase() === id)

  if (!collection) {
    return null;
  }

  return {
    images: chunkByPattern(filtered),
    collection,
  };
};

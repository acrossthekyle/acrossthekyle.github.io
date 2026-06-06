import images from '@/cache/images';

export default async function get(id) {
  const results = images.filter((image) => image.collectionId === id);

  if (results.length === 0) {
    return null;
  }

  return results;
};

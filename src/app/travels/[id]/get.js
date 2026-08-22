import collections from '@/cache/collections';
import images from '@/cache/images';
import landmarks from '@/cache/landmarks';
import timelines from '@/cache/timelines';

export async function get(id) {
  const index = collections.findIndex(item => item.id.toLowerCase() === id);

  if (index < 0) {
    return null;
  }

  return {
    collection: collections[index],
    collections,
    images: images.filter((image) => image.collectionId.toLowerCase() === id),
    landmarks: landmarks.find((landmark) => landmark.collectionId.toLowerCase() === id)?.items,
    timeline: timelines.find((timeline) => timeline.collectionId.toLowerCase() === id)?.items,
  };
};

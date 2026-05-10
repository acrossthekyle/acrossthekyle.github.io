import type { Data } from '@/types';

export function getDelay(imageIndex: number) {
  return [0.25, 0.125, 0.375, 0][imageIndex % 4];
};

export function getImage(image: Data, value: string | null, by: string) {
  if (by === 'collection') {
    return image.collection.id.toLowerCase() === value;
  }

  if (by === 'category') {
    return image.category.toLowerCase() === value;
  }

  if (by === 'continent') {
    return image.location.continent.toLowerCase() === value;
  }

  return image;
};

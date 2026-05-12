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

function getSeedGenerator(a: number) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);

    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
};

export function getOrder(images: Data[], direction: number) {
  const duplicated = [...images];

  if (direction === 1) {
    return duplicated.reverse();
  }

  if (direction > 1) {
    const seed = getSeedGenerator(direction);

    for (let i = duplicated.length - 1; i > 0; i--) {
      const j = Math.floor(seed() * (i + 1));

      [duplicated[i], duplicated[j]] = [duplicated[j], duplicated[i]];
    }
  }

  return duplicated;
};

export function getRatio(id: string) {
  const sum = id.split('').reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);

  const index = sum % 3;

  return index === 0 ? 'video' : index === 1 ? 'portrait' : 'square';
}

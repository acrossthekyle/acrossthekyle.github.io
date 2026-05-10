import type { Collection, Data } from '@/types';

type Info = {
  collection: Collection | null;
  data: string[];
  title: string;
};

export function getInfo(
  collections: Collection[],
  images: Data[],
  filter: string | null,
  view: string | null,
): Info {
  if (view === 'category') {
    const filtered = collections.filter(({ category }) =>
      category.toLowerCase() === (filter || '').toLowerCase()
    );

    const images = filtered.reduce(
      (accumlator, { count }) => accumlator + count,
      0,
    );

    return {
      collection: null,
      data: [
        `${filtered.length} Collection${filtered.length > 1 ? 's' : ''}`,
        `${images} Photo${images > 1 ? 's' : ''}`
      ],
      title: filtered[0].category,
    };
  }

  if (view === 'collection') {
    const filtered = collections.find(({ id }) => id === (filter || ''));

    if (!filtered) {
      return {
        collection: null,
        data: [],
        title: 'Not Found',
      };
    }

    return {
      collection: filtered,
      data: [
        filtered.location.country,
        `${filtered.count} Photo${filtered.count > 1 ? 's' : ''}`
      ],
      title: filtered.title,
    };
  }

  if (view === 'continent') {
    const filtered = images.filter(({ location }) =>
      location.continent.toLowerCase() === (filter || '').toLowerCase()
    );

    return {
      collection: null,
      data: [
        `${filtered.length} Photo${filtered.length > 1 ? 's' : ''}`,
      ],
      title: filtered[0].location.continent,
    };
  }

  return {
    collection: null,
    data: [
      `${images.length} Photo${images.length > 1 ? 's' : ''}`,
      `${collections.length} Collection${collections.length > 1 ? 's' : ''}`,
    ],
    title: 'Library',
  };
};

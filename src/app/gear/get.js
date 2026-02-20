import places from '@/db/places';

import { formatDateRange } from '../utils';

export default function get() {
  const reduced = places
    .filter((item) => item.hasGear)
    .reduce((result, place) => {
      const key = place.type;

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(place);

      return result;
    }, {});

  const sorted = Object.keys(reduced).sort((a, b) => {
    return b.localeCompare(a);
  });

  const ordered = sorted.reduce((result, key) => {
    result[key] = reduced[key];

    return result;
  }, {});

  return Object.entries(ordered).map(([key, items]) => {
    return {
      count: items.length,
      id: key.replace(' ', '-'),
      items: items.map(({ date, gear, slug, title }) => ({
        base: gear?.weightTotal || '',
        date: formatDateRange(date, true),
        slug,
        title: title.join(' '),
      })),
      name: key,
    };
  });
};

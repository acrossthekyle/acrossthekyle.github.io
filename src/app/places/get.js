import places from '@/db/places';

import { formatDateRange, padIndex, uppercaseFirst } from '../utils';

export default function get() {
  const reduced = places.reduce((result, place) => {
    const key = place.continent;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(place);

    return result;
  }, {});

  const sorted = Object.keys(reduced).sort();

  const ordered = sorted.reduce((result, key) => {
    result[key] = reduced[key];

    return result;
  }, {});

  const groups = Object.entries(ordered).map(([key, items]) => {
    const typed = items.reduce((result, item) => {
      const key = item.type;

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(item);

      return result;
    }, {});

    const types = Object.entries(typed).map(([type, items]) => ({
      name: uppercaseFirst(type),
      count: items.length,
    }));

    return {
      id: key.replace(' ', '-'),
      name: key,
      items: items.map(({
        date,
        index,
        location,
        position,
        slug,
        title,
        type,
      }) => ({
        date: formatDateRange(date, true),
        index: padIndex(index + 1),
        location,
        position: {
          top: position[0],
          left: position[1],
        },
        slug,
        title: title.join(' '),
        type: uppercaseFirst(type),
      })),
      types,
    };
  });

  return {
    groups,
    markers: places.map(({ position, slug, title }) => ({
      position: {
        top: position[0],
        left: position[1],
      },
      slug,
      title: title.join(' '),
    })),
  };
};

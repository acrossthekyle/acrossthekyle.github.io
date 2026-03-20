import gear from '@/db/gear';
import places from '@/db/places';

export default function get() {
  const reduced = gear
    .reduce((result, data) => {
      const place = places.find(({ id }) => id === data.placeId);

      const key = place.type;

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push({
        date: place.year,
        gear: data,
        id: place.id,
        title: place.title,
      });

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
      items: items.map(({ date, gear, id, title }) => ({
        base: gear.weightBase,
        date,
        slug: id,
        title,
      })),
      name: key,
    };
  });
};

import places from '@/db/places';
import stages from '@/db/stages';
import stats from '@/db/stats';

import { padIndex } from '../../utils';

function buildStats(stats) {
  return [
    stats?.total,
    stats?.distance,
    stats?.max,
  ].filter(Boolean);
}

export default function get(slug) {
  const place = places.find((item) => item.id === slug);

  if (place === undefined) {
    return null;
  }

  return {
    description: place.description,
    label: place.label,
    location: place.location,
    position: {
      top: place.position[0],
      left: place.position[1],
    },
    slug,
    stages: stages
      .filter(({ placeId }) => placeId === place.id)
      .map(({ date, image, title }, index) => ({
        date,
        index: padIndex(index + 1),
        image,
        title,
      })),
    stats: buildStats(stats.find(({ placeId }) => placeId === place.id)),
    title: place.title,
    type: place.type,
    year: place.year,
  };
};

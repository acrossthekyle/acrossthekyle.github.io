import images from '@/db/images';
import places from '@/db/places';
import stages from '@/db/stages';
import stats from '@/db/stats';

import { padIndex, uppercaseFirst } from '../../utils';

function buildStats(stats) {
  return [
    stats?.when,
    stats?.total,
    stats?.distance,
    stats?.max,
    stats?.gain,
    stats?.loss,
  ].filter(Boolean);
}

export default function get(slug) {
  const place = places.find((item) => item.id === slug);

  if (place === undefined) {
    return null;
  }

  return {
    description: place.description,
    images: images
      .filter(({ placeId }) => placeId === place.id)
      .map(({ path }, index) => ({
        index: padIndex(index + 1),
        src: path,
      })),
    isDestination: place.type === 'destination',
    label: place.label,
    location: place.location,
    position: {
      top: place.position[0],
      left: place.position[1],
    },
    slug,
    stages: stages
      .filter(({ placeId }) => placeId === place.id)
      .map(({ title }, index) => ({
        index: padIndex(index + 1),
        title,
      })),
    stats: buildStats(stats.find(({ placeId }) => placeId === place.id)),
    title: place.title,
    type: uppercaseFirst(place.type),
    total: padIndex(stages.filter(({ placeId }) => placeId === place.id).length),
    year: place.year,
  };
};

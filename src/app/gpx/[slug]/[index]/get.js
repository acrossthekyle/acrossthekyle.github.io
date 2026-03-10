import gpxs from '@/db/gpx';
import places from '@/db/places';
import stages from '@/db/stages';

import { padIndex } from '../../../utils';

export default function get(slug, index) {
  const place = places.find((item) => item.id === slug);
  const stage = stages.find(({ id, placeId }) => id === index && placeId === slug);
  const gpx = gpxs.find(({ id, placeId }) => id === index && placeId === slug);
  const total = stages.filter(({ placeId }) => placeId === slug).length;

  if (place === undefined || stage === undefined || gpx === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > total - 1) {
    return null;
  }

  const next = key === total - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    back: [
      {
        text: `/${place.title.toLowerCase()}`,
        uri: `/places/${slug}`,
      },
      {
        text: `/metrics`,
        uri: `/places/${slug}#gpx`,
      },
    ],
    elevation: gpx.elevation,
    hasNavigation: next !== null || previous !== null,
    metrics: [
      gpx.beginning,
      gpx.ending,
      gpx.distance,
      gpx.time,
      gpx.max,
      gpx.start,
      gpx.end,
      gpx.gain,
      gpx.loss,
    ],
    next: next ? padIndex(next) : '',
    previous: previous ? padIndex(previous) : '',
    slug,
    subTitle: `${stage.date} • ${stage.location}, ${place.location}`,
    title: `${place.title} ${place.label} ${index}/${padIndex(total)}`,
  };
};

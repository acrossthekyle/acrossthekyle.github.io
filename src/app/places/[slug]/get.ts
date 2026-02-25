import db from '@/db/places';
import type { StatFull } from '@/types';

import { combineTermini, formatDateRange, padIndex, uppercaseFirst } from '../../utils';

function buildStats(
  type: string,
  date: { isYears: boolean; range: string[]; },
  stages: number,
  stats: {
    altitude: StatFull | null;
    distance: StatFull | null;
    gain: StatFull | null;
    loss: StatFull | null;
  },
) {
  const result = [
    {
      label: 'When',
      value: formatDateRange(date),
    },
  ];

  if (['section hike'].includes(type)) {
    result.push({
      label: 'Total',
      value: `${stages} sections`,
    });
  }

  if (['summit'].includes(type)) {
    result.push({
      label: 'Total',
      value: `${stages} summits`,
    });
  }

  if (['destination'].includes(type)) {
    result.push({
      label: 'Experiences',
      value: `${stages} destinations`,
    });
  }

  if (['thru-hike'].includes(type)) {
    result.push({
      label: 'Duration',
      value: `${stages} days`,
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek'].includes(type) &&
    stats.distance
  ) {
    result.push({
      label: 'Distance',
      value: `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`,
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek', 'summit'].includes(type) &&
    stats.altitude
  ) {
    result.push({
      label: ['summit'].includes(type) ? 'Highest peak' : 'Max altitude',
      value: `${stats.altitude.value.imperial} ${stats.altitude.units.imperial.abbreviated}`,
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek'].includes(type) &&
    stats.gain &&
    stats.loss
  ) {
    result.push({
      label: 'Elevation',
      value: `▲ ${stats.gain?.value.imperial} ${stats.gain?.units.imperial.abbreviated} / ${stats.loss?.value.imperial} ${stats.loss?.units.imperial.abbreviated} ▼`,
    });
  }

  return result;
}

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    description: data.description,
    images: data.stages.map(({ image }, index) => ({
      index: padIndex(index + 1),
      src: image,
    })),
    isDestination: data.type === 'destination',
    label: data.label,
    location: data.location,
    slug,
    stages: data.stages.map(({ termini }, index) => ({
      index: padIndex(index + 1),
      title: combineTermini(termini),
    })),
    stats: buildStats(data.type, data.date, data.stages.length, data.stats),
    title: data.title.join(' '),
    type: uppercaseFirst(data.type),
    total: padIndex(data.stages.length),
    year: formatDateRange(data.date, true),
  };
};

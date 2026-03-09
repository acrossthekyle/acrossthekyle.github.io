import db from '@/db/places';
import type { Stat, StatFull } from '@/types';

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
  const result: Stat[] = [
    {
      label: 'When',
      value: {
        basic: formatDateRange(date),
        complex: {
          imperial: '',
          metric: '',
        },
      },
    },
  ];

  if (['section hike'].includes(type)) {
    result.push({
      label: 'Total',
      value: {
        basic: `${stages} sections`,
        complex: {
          imperial: '',
          metric: '',
        },
      },
    });
  }

  if (['summit'].includes(type)) {
    result.push({
      label: 'Total',
      value: {
        basic: `${stages} summits`,
        complex: {
          imperial: '',
          metric: '',
        },
      },
    });
  }

  if (['destination'].includes(type)) {
    result.push({
      label: 'Experiences',
      value: {
        basic: `${stages} destinations`,
        complex: {
          imperial: '',
          metric: '',
        },
      },
    });
  }

  if (['thru-hike'].includes(type)) {
    result.push({
      label: 'Duration',
      value: {
        basic: `${stages} days`,
        complex: {
          imperial: '',
          metric: '',
        },
      },
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek'].includes(type) &&
    stats.distance
  ) {
    result.push({
      label: 'Distance',
      value: {
        basic: '',
        complex: stats.distance.value,
      },
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek', 'summit'].includes(type) &&
    stats.altitude
  ) {
    result.push({
      label: ['summit'].includes(type) ? 'Highest peak' : 'Max altitude',
      value: {
        basic: '',
        complex: stats.altitude.value,
      },
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek'].includes(type) &&
    stats.gain
  ) {
    result.push({
      label: 'Elevation gain',
      value: {
        basic: '',
        complex: stats.gain.value,
      },
    });
  }

  if (
    ['thru-hike', 'section hike', 'overnight trek'].includes(type) &&
    stats.loss
  ) {
    result.push({
      label: 'Elevation loss',
      value: {
        basic: '',
        complex: stats.loss.value,
      },
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
    position: {
      top: data.position[0],
      left: data.position[1],
    },
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

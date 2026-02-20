import db from '@/db/places';
import type { StatFull, StatShort } from '@/types';

import {
  combineTermini,
  formatDateRange,
  padIndex,
  uppercaseFirst,
} from '../../utils';

function buildStageStats(
  type: string,
  date: string,
  stats: {
    distance: StatFull | null;
    gain: StatFull | null;
    loss: StatFull | null;
    max: StatFull | null;
    time: StatShort | null;
  },
) {
  const result: string[] = [];

  if (['summit'].includes(type)) {
    result.push(`${stats.max?.value.imperial} ${stats.max?.units.imperial.abbreviated} peak`);
  }

  if (['thru-hike', 'section hike', 'overnight trek'].includes(type)) {
    result.push(`${stats.distance?.value.imperial} ${stats.distance?.units.imperial.full}`);
  }

  if (['thru-hike', 'section hike', 'overnight trek'].includes(type)) {
    result.push(
      `${stats.gain?.value.imperial} ${stats.gain?.units.imperial.abbreviated} gain /
      ${stats.loss?.value.imperial} ${stats.loss?.units.imperial.abbreviated} loss`
    );
  }

  if (['thru-hike', 'section hike', 'overnight trek', 'summit'].includes(type)) {
    result.push(`${stats.time?.value} ${stats.time?.units}`);
  }

  if (['summit'].includes(type)) {
    result.push(
      `${stats.gain?.value.imperial} ${stats.gain?.units.imperial.abbreviated} ascent`
    );
  }

  if (['destination'].includes(type)) {
    result.push(date);
  }

  return result;
}

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
    images: data.stages.map(({ image, location }, index) => ({
      index: padIndex(index + 1),
      location: [location, data.location].join(', '),
      src: image,
    })),
    label: data.label,
    location: data.location,
    position: {
      top: data.position[0],
      left: data.position[1],
    },
    slug,
    stages: data.stages.map(({ date, stats, termini }, index) => ({
      date,
      index: padIndex(index + 1),
      stats: buildStageStats(data.type, date, stats),
      title: combineTermini(termini),
    })),
    stats: buildStats(data.type, data.date, data.stages.length, data.stats),
    title: data.title.join(' '),
    type: uppercaseFirst(data.type),
    total: padIndex(data.stages.length),
    year: formatDateRange(data.date, true),
  };
};

import db from '@/db/places';
import type { Gpx, StatFull, StatShort } from '@/types';

import { padIndex } from '../../../utils';

function buildStats(
  gpx: Gpx,
  stats: {
    distance: StatFull | null;
    gain: StatFull | null;
    loss: StatFull | null;
    max: StatFull | null;
    time: StatShort | null;
  },
  termini: {
    isSame: boolean;
    start: {
      words: string[];
    };
    end: {
      words: string[];
    };
  },
) {
  return [
    {
      label: 'Start',
      value: termini.start.words.join(' '),
    },
    {
      label: 'End',
      value: termini.end.words.join(' '),
    },
    {
      label: 'Distance',
      value: `${stats.distance?.value.imperial} ${stats.distance?.units.imperial.full}`,
    },
    {
      label: 'Time',
      value: `${stats.time?.value} ${stats.time?.units}`,
    },
    {
      label: 'Max altitude',
      value: `${stats.max?.value.imperial} ${stats.max?.units.imperial.abbreviated}`,
    },
    {
      label: 'Altitude start',
      value: `${new Intl.NumberFormat().format(gpx[0][2])} ft`,
    },
    {
      label: 'Altitude end',
      value: `${new Intl.NumberFormat().format(gpx[gpx.length - 1][2])} ft`,
    },
    {
      label: 'Elevation gain',
      value: `${stats.gain?.value.imperial} ${stats.gain?.units.imperial.abbreviated}`,
    },
    {
      label: 'Elevation loss',
      value: `${stats.loss?.value.imperial} ${stats.loss?.units.imperial.abbreviated}`,
    },
  ];
}

export default function get(slug: string, index: string) {
  const found = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > found.stages.length - 1) {
    return null;
  }

  const result = found.stages[key];

  const next = key === found.stages.length - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    date: result.date,
    gpx: result.gpx as Gpx,
    hasNavigation: next !== null || previous !== null,
    index,
    label: found.label,
    location: [result.location, found.location].join(', '),
    metrics: buildStats(result.gpx as Gpx, result.stats, result.termini),
    next: next ? padIndex(next) : '',
    place: found.title.join(' '),
    previous: previous ? padIndex(previous) : '',
    slug,
    title: result.termini.end.words.join(' '),
    total: padIndex(found.stages.length),
  };
};

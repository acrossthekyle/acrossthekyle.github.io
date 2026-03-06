import db from '@/db/places';
import type { Gpx, StatFull, StatShort } from '@/types';

import { padIndex } from '../../../utils';

const FALLBACK = {
  imperial: '',
  metric: '',
};

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
      value: {
        basic: termini.start.words.join(' '),
        complex: {
          imperial: '',
          metric: '',
        },
      },
    },
    {
      label: 'End',
      value: {
        basic: termini.end.words.join(' '),
        complex: {
          imperial: '',
          metric: '',
        },
      },
    },
    {
      label: 'Distance',
      value: {
        basic: '',
        complex: stats.distance?.value || FALLBACK,
      },
    },
    {
      label: 'Time',
      value: {
        basic: `${stats.time?.value} ${stats.time?.units}`,
        complex: {
          imperial: '',
          metric: '',
        },
      },
    },
    {
      label: 'Max altitude',
      value: {
        basic: '',
        complex: stats.max?.value || FALLBACK,
      },
    },
    {
      label: 'Altitude start',
      value: {
        basic: '',
        complex: {
          imperial: String(gpx[0][2]),
          metric: '',
        },
      },
    },
    {
      label: 'Altitude end',
      value: {
        basic: '',
        complex: {
          imperial: String(gpx[gpx.length - 1][2]),
          metric: '',
        },
      },
    },
    {
      label: 'Elevation gain',
      value: {
        basic: '',
        complex: stats.gain?.value || FALLBACK,
      },
    },
    {
      label: 'Elevation loss',
      value: {
        basic: '',
        complex: stats.loss?.value || FALLBACK,
      },
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

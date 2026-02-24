import db from '@/db/places';
import type { Gpx } from '@/types';

import { combineTermini, padIndex } from '../../../utils';

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
    location: [result.location, found.location].join(', '),
    next: next ? padIndex(next) : '',
    place: found.title.join(' '),
    previous: previous ? padIndex(previous) : '',
    slug,
    stats: result.stats,
    title: combineTermini(result.termini),
    total: padIndex(found.stages.length),
  };
};

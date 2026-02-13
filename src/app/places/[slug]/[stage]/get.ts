import db from '@/db/places';
import type { Gpx } from '@/types';
import { padIndex } from '@/utils';

export default function get(slug: string, stage: string) {
  const found = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const index = Number(stage) - 1;

  if (index < 0 || index > found.stages.length - 1) {
    return null;
  }

  const next = index === found.stages.length - 1 ? null : padIndex(index + 2);
  const previous = index === 0 ? null : padIndex(index);

  const result = found.stages[index];

  const title = result.termini.isSame
    ? result.termini.end.words.join(' ')
    : `${result.termini.start.words.join(' ')} to ${result.termini.end.words.join(' ')}`;

  return {
    content: result.content,
    date: result.date,
    gpx: result.gpx as Gpx,
    hasGpx: result.hasGpx,
    hasNavigation: next !== null || previous !== null,
    image: result.image,
    index: stage,
    label: found.label,
    location: [result.location, found.location].join(', '),
    next,
    parent: found.title.join(' '),
    previous,
    readingTime: result.readingTime,
    slug,
    stats: result.stats,
    title,
  };
};

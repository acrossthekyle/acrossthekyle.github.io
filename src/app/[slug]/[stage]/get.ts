import db from '@/db';
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

  const next = index === found.stages.length - 1 ? undefined : index + 2;
  const previous = index === 0 ? undefined : index;

  const result = found.stages[index];

  return {
    date: result.date,
    description: result.description,
    gpx: result.gpx as Gpx,
    hasGpx: result.hasGpx,
    hasStats: result.hasStats,
    image: result.image,
    index: stage,
    label: found.label,
    next: next ? {
      date: found.stages[next - 1].date,
      index: padIndex(next),
      title: found.stages[next - 1].termini.end.words,
    } : undefined,
    previous: previous ? {
      date: found.stages[previous - 1].date,
      index: padIndex(previous),
      title: found.stages[previous - 1].termini.end.words,
    } : undefined,
    slug,
    stage,
    stats: result.stats,
    termini: result.termini,
    total: found.stages.length,
    title: result.termini.end.words,
    travel: found.title.join(' '),
  };
};

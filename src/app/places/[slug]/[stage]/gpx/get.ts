import db from '@/db/places';
import type { Gpx } from '@/types';

export default function get(slug: string, stage: string) {
  const parent = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (parent === undefined) {
    return null;
  }

  const index = Number(stage) - 1;

  if (index < 0 || index > parent.stages.length - 1) {
    return null;
  }

  const result = parent.stages[index];

  return {
    gpx: result.gpx as Gpx,
    index: stage,
    label: parent.label,
    parent: parent.title,
    slug,
    stats: result.stats,
    title: result.termini.end.words,
  };
};

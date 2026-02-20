import db from '@/db/places';
import type { Gpx } from '@/types';

export default function get(slug: string, stage: string) {
  const found = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const index = Number(stage) - 1;

  if (index < 0 || index > found.stages.length - 1) {
    return null;
  }

  const result = found.stages[index];

  return {
    content: result.content,
    date: result.date,
    gpx: result.gpx as Gpx,
    readingTime: result.readingTime,
    stats: result.stats,
  };
};

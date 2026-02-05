import db from '@/db/places';
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
    content: result.content,
    date: result.date,
    excerpt: result.excerpt,
    hasGpx: result.hasGpx,
    hasNavigation: next !== undefined || previous !== undefined,
    image: result.image,
    index: stage,
    label: found.label,
    location: [result.location, found.location],
    next: next ? {
      index: padIndex(next),
      label: found.label,
      termini: found.stages[next - 1].termini,
    } : undefined,
    parent: found.title,
    previous: previous ? {
      index: padIndex(previous),
      label: found.label,
      termini: found.stages[previous - 1].termini,
    } : undefined,
    readingTime: result.readingTime,
    slug,
    snippet: result.snippet,
    stats: result.stats,
    termini: result.termini,
    total: padIndex(found.stages.length),
    title: result.termini.end.words,
  };
};

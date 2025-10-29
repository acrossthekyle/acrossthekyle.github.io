import db from '@/db';
import type { Post } from '@/types';
import { padIndex } from '@/utils';

export default function get(slug: string): Post | null {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    description: data.description,
    label: data.label,
    slug,
    stages: data.stages.map(({ date, description, hasStats, image, readingTime, termini }, index) => ({
      date,
      hasPost: description.length > 0 && readingTime !== undefined,
      hasStats,
      image,
      index: padIndex(index + 1),
      termini,
    })),
    title: data.title,
    type: data.type,
  };
};

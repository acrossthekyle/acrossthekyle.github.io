import db from '@/db';
import type { Post } from '@/types';
import { padIndex } from '@/utils';

export default function get(slug: string): Post | null {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    category: data.category,
    date: data.date,
    description: data.description,
    label: data.label,
    location: data.location,
    slug,
    stages: data.stages.map(({ date, description, hasStats, image, readingTime, termini }, index) => ({
      date,
      description,
      hasStats,
      image,
      index: padIndex(index + 1),
      readingTime,
      termini,
    })),
    title: data.title,
    type: data.type,
  };
};

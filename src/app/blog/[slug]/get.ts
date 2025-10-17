import db from '@/db';
import type { Post } from '@/types';

export default function get(slug: string): Post | null {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    description: data.description,
    slug,
    stages: data.stages.map(({ date, description, hasStats, image, readingTime, termini }) => ({
      date,
      hasPost: description.length > 0 && readingTime !== undefined,
      hasStats,
      image,
      termini,
    })),
    title: data.title,
  };
};

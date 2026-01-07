import db from '@/db';
import { padIndex } from '@/utils';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    category: data.category,
    date: data.date,
    description: data.description,
    image: data.image,
    index: padIndex(db.findIndex((item) => item.slug.toLowerCase() === slug.toLowerCase()) + 1),
    label: data.label,
    location: data.location,
    slug,
    stages: data.stages.map(({ date, description, hasStats, image, location, termini }, index) => ({
      date,
      description,
      hasStats,
      image,
      index: padIndex(index + 1),
      location,
      termini,
    })),
    title: data.title,
    travel: data.location,
    type: data.type,
  };
};

import db from '@/db/experiences';
import { padIndex } from '@/utils';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    date: data.date,
    description: data.description,
    gearWeight: data.gear?.weightBase || '0',
    hasGear: data.hasGear,
    label: data.label,
    location: data.location,
    slug,
    stages: data.stages.map(({
        date,
        description,
        image,
        location,
        snippet,
        termini,
      }, index: number) => ({
        date,
        description,
        image,
        index: padIndex(index + 1),
        location,
        snippet,
        termini,
      })),
    title: data.title,
    total: data.stages.length,
    type: data.type,
  };
};

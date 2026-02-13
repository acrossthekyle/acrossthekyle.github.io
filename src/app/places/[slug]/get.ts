import db from '@/db/places';
import { padIndex } from '@/utils';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  const date = data.date.isYears
    ? `${data.date.range[0]}:${data.date.range[1]}`
    : data.date.range[1].split(', ')[1];

  return {
    date,
    description: data.description,
    hasGear: data.hasGear,
    label: data.label,
    location: data.location,
    position: {
      top: data.position[0],
      left: data.position[1],
    },
    slug,
    stages: data.stages.map(({ image }, index: number) => ({
      image,
      index: padIndex(index + 1),
    })),
    title: data.title.join(' '),
    type: data.type,
    total: data.stages.length,
  };
};

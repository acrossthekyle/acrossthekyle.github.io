import db from '@/db/places';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  if (!data.hasGear) {
    return null;
  }

  return {
    base: data.gear?.weightBase || '',
    categories: data.gear?.categories || [],
    date: data.date.isYears
      ? `${data.date.range[0]}..${data.date.range[1]}`
      : data.date.range[1].split(', ')[1],
    title: data.title.join(' '),
  };
};

import db from '@/db/experiences';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  if (!data.hasGear) {
    return null;
  }

  return {
    categories: data.gear?.categories || [],
    slug,
    title: data.title,
    weights: {
      base: data.gear?.weightBase || '',
    },
  };
};

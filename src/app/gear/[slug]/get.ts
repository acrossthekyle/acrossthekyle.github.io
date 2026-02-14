import db from '@/db/places';

import { formatDateRange } from '../../utils';

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
    date: formatDateRange(data.date),
    title: data.title.join(' '),
  };
};

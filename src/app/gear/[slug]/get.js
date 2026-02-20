import db from '@/db/places';

import { formatDateRange } from '../../utils';

export default function get(slug, type) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined || !data?.hasGear) {
    return null;
  }

  return {
    base: data.gear?.weightBase || '',
    categories: (data.gear?.categories || []).filter((category) => {
      if (type === 'base') {
        return category.items.filter((item) => !item.consumable && !item.worn).length > 0;
      }

      if (type === 'consumable') {
        return category.items.filter((item) => item.consumable).length > 0;
      }

      if (type === 'worn') {
        return category.items.filter((item) => item.worn).length > 0;
      }

      return true;
    }).map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        if (type === 'base') {
          return !item.consumable && !item.worn;
        }

        if (type === 'consumable') {
          return item.consumable;
        }

        if (type === 'worn') {
          return item.worn;
        }

        return true;
      }),
    })),
    consumable: data.gear?.weightConsumable || '',
    date: formatDateRange(data.date, true),
    slug,
    title: data.title.join(' '),
    total: data.gear?.weightTotal || '',
    type,
    worn: data.gear?.weightWorn || '',
  };
};

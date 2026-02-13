import db from '@/db/places';
import { padIndex } from '@/utils';

export default function get() {
  return db.filter((item) => item.hasGear)
    .map(({ date, gear, slug, title }, index) => ({
      base: gear?.weightBase || '',
      date: date.isYears
        ? `${date.range[0]}..${date.range[1]}`
        : date.range[1].split(', ')[1],
      index: padIndex(index + 1),
      slug,
      title: title.join(' '),
    }));
};

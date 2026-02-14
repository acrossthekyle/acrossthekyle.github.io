import db from '@/db/places';

import { formatDateRange, padIndex } from '../utils';

export default function get() {
  return db.filter((item) => item.hasGear)
    .map(({ date, gear, slug, title }, index) => ({
      base: gear?.weightTotal || '',
      date: formatDateRange(date),
      index: padIndex(index + 1),
      slug,
      title: title.join(' '),
    }));
};

import db from '@/db/trails-and-travels';
import { padIndex } from '@/utils';

export default function get() {
  return db.slice(0, 4).map(({
    date,
    index,
    location,
    slug,
    title,
  }) => ({
    date,
    index: padIndex(index + 1),
    location,
    slug,
    title,
  }));
};

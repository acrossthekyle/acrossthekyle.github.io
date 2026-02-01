import db from '@/db/trails-and-travels';
import { padIndex } from '@/utils';

export default function get() {
  return db.map(({
    date,
    index,
    location,
    slug,
    title,
    type,
  }) => ({
    date,
    index: padIndex(index + 1),
    location,
    slug,
    title,
    type,
  }));
};

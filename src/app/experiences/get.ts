import db from '@/db/experiences';
import { padIndex } from '@/utils';

export default function get() {
  return db.map(({
    date,
    index,
    location,
    slug,
    timestamp,
    title,
    type,
  }) => ({
    date,
    index: padIndex(index + 1),
    location,
    slug,
    timestamp,
    title,
    type,
  }));
};

import db from '@/db/places';
import { padIndex } from '@/utils';

export default function get() {
  return db.map(({
    date,
    index,
    location,
    position,
    slug,
    title,
    type,
  }) => ({
    date,
    index: padIndex(index + 1),
    location,
    position: {
      top: position[0],
      left: position[1],
    },
    slug,
    title,
    type,
  }));
};

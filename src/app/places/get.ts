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
    date: date.isYears
      ? `${date.range[0]}:${date.range[1]}`
      : date.range[1].split(', ')[1],
    index: padIndex(index + 1),
    location,
    position: {
      top: position[0],
      left: position[1],
    },
    slug,
    title: title.join(' '),
    type,
  }));
};

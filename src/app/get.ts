import db from '@/db';
import { padIndex } from '@/utils';

export default function get() {
  return db.map(({
    date,
    description,
    image,
    index,
    label,
    location,
    slug,
    stages,
    timestamp,
    title,
    type,
  }) => ({
    count: stages.length,
    date,
    description,
    image,
    index: padIndex(index + 1),
    label,
    location,
    slug,
    timestamp,
    title,
    type,
  }));
};

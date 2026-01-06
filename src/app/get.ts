import db from '@/db';
import { padIndex } from '@/utils';

export default function get() {
  return db.map(({ category, date, description, image, index, label, location, slug, stages, timestamp, title, type }) => ({
    category,
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

import db from '@/db';

export default function get() {
  return db.map(({ category, date, description, image, index, label, location, slug, stages, timestamp, title, type }) => ({
    category,
    count: stages.length,
    date,
    description,
    image,
    index,
    label,
    location,
    slug,
    timestamp,
    title,
    type,
  }));
};

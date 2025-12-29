import db from '@/db';

export default function get() {
  return db.map(({ date, description, image, index, label, location, slug, stages, timestamp, title, type }) => ({
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

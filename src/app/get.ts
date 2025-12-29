import db from '@/db';

export default function get() {
  return db.map(({ date, description, image, index, location, slug, stages, title, type }) => ({
    count: stages.length,
    date,
    description,
    image,
    index,
    location,
    slug,
    title,
    type,
  }));
};

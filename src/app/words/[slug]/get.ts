import db from '@/db/words';

export default function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  return {
    ...data,
    slug,
  };
};

import collections from '@/cache/collections';

export default async function get() {
  const data = collections.map(({ category, coordinates, count, cover, id, location, title, year }) => ({
    category,
    coordinates,
    count,
    cover: cover[Math.floor(Math.random() * cover.length)],
    id,
    location,
    title,
    year,
  }));

  return Array.from({ length: Math.ceil(data.length / 6) }, (_, index) =>
    data.slice(index * 6, index * 6 + 6)
  );
};

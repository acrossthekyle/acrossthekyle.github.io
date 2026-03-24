import places from '@/db/places';

export default function get() {
  return places
    .filter(({ type }) => ['summit'].includes(type))
    .map(({ id, title }) => ({
      id,
      title,
    }));
};

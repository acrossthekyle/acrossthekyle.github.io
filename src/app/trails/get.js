import places from '@/db/places';

export default function get() {
  return places
    .filter(({ type }) => ['thru-hike', 'overnight trek', 'section hike', 'summit'].includes(type))
    .map(({ id, title }) => ({
      id,
      title,
    }));
};

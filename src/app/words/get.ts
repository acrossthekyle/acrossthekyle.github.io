import data from '@/db/writing';
import { padIndex } from '@/utils';

export default function get() {
  return data.map(({ date, index, slug, title }) => ({
    date,
    index: padIndex(index + 1),
    slug,
    title,
  }));
};

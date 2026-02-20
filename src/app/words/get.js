import data from '@/db/words';

import { padIndex } from '../utils';

export default function get() {
  return data.map(({ content, date, index, readingTime, slug, title }) => ({
    content,
    date,
    index: padIndex(index + 1),
    readingTime,
    slug,
    title,
  }));
};

import data from '@/db/photos';

import { padIndex } from '../utils';

export default function get() {
  return data.map((item, index) => ({
    ...item,
    index: padIndex(index + 1),
  }));
};

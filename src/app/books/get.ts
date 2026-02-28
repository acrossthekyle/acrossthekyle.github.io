import data from '@/db/books';

const REGEX = /^(a|an|the)(\s)/i;

export default function get() {
  return data.sort((a, b) => {
    return a.title.replace(REGEX, '').localeCompare(b.title.replace(REGEX, ''));
  });
};

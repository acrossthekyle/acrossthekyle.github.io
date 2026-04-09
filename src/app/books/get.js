import books from '@/db/books';

const REGEX = /^(a|an|the)(\s)/i;

export default function get() {
  return {
    books: books.sort((a, b) => {
      return a.title.replace(REGEX, '').localeCompare(b.title.replace(REGEX, ''));
    }),
  };
};

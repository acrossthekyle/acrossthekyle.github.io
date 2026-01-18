import data from '@/db/writing';

export default function get() {
  return data.map(({ author, content, date, title }) => ({
    author,
    content,
    date,
    title,
  }));
};

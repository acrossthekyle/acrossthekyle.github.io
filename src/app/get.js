import data from '@/db';

export default async function get() {
  return data.map((item) => ({
    ...item,
    cover: item.cover[Math.floor(Math.random() * item.cover.length)],
  }));
};

import albums from '@/db/albums';

export default function get() {
  return {
    albums,
    files: albums.reduce((total, data) => total + Number(data.images.length), 0),
  };
};

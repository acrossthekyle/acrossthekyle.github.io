import travels from '@/cache/travels';

export async function get() {
  return {
    travels,
  };
};

import type { Date } from '@/types';

export type Data = {
  date: Date;
  index: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  title: string[];
  type: string;
};

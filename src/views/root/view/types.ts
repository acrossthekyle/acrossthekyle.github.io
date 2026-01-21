import type { Date } from '@/types';

export type Data = {
  experiences: Array<{
    date: Date;
    location: string;
    slug: string;
    title: string[];
    type: string;
  }>;
  role: {
    date: string;
    position: string;
    title: string[];
  };
};

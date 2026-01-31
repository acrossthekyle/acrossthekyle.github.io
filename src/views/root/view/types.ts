import type { Date } from '@/types';

export type Data = {
  date: Date;
  index: string;
  location: string;
  slug: string;
  title: string[];
};

export type Timeline = {
  paragraph?: string;
  title: string;
  year: number;
};

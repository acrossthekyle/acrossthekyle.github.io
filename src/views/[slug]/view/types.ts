import type { Stage } from '@/types';

export type Post = {
  category: string;
  date: string;
  description: string[];
  image: string;
  index: string;
  label: string;
  location: string;
  slug: string;
  stages: Stage[];
  title: string[];
  type: string;
};

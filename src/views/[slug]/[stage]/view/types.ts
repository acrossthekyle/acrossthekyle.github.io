import type { Navigation, Stats } from '@/types';

export type Data = {
  date: string;
  description: string[];
  hasGpx: boolean;
  hasNavigation: boolean;
  hasStats: boolean;
  image: string;
  index: string;
  location: string[];
  next?: Navigation;
  previous?: Navigation;
  slug: string;
  stats: Stats;
  total: number;
  title: string[];
};

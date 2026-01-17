import type { Navigation, Stats } from '@/types';

export type Data = {
  date: string;
  description: string[];
  excerpt: string;
  hasGpx: boolean;
  hasNavigation: boolean;
  hasStats: boolean;
  image: string;
  index: string;
  location: string[];
  next?: Navigation;
  parent: string[];
  previous?: Navigation;
  slug: string;
  snippet: string;
  stats: Stats;
  total: number;
  title: string[];
};

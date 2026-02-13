import type { Gpx, Stats } from '@/types';

export type Data = {
  content: string;
  date: string;
  gpx: Gpx;
  hasGpx: boolean;
  hasNavigation: boolean;
  image: string;
  index: string;
  label: string;
  location: string;
  next: string | null;
  parent: string;
  previous: string | null;
  readingTime: string;
  slug: string;
  stats: Stats;
  title: string;
};

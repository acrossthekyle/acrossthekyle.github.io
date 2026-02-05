import type { Gpx, Stats } from '@/types';

export type Data = {
  gpx: Gpx;
  index: string;
  label: string;
  parent: string[];
  slug: string;
  stats: Stats;
  title: string[];
};

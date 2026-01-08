import type { Gpx, Navigation, Stats, Termini } from '@/types';

export type Data = {
  date: string;
  description: string[];
  gpx: Gpx;
  hasGpx: boolean;
  hasStats: boolean;
  image: string;
  index: string;
  label: string;
  location: string[];
  next?: Navigation;
  parent: string[];
  previous?: Navigation;
  slug: string;
  stage: string;
  stats: Stats;
  termini: Termini;
  total: number;
  title: string[];
};

import type { Gpx, Navigation, Stats, Termini } from '@/types';

export type Data = {
  date: string;
  description: string[];
  gpx: Gpx;
  hasGpx: boolean;
  hasStats: boolean;
  image: string;
  label: string;
  next?: Navigation;
  previous?: Navigation;
  slug: string;
  stage: string;
  stats: Stats;
  termini: Termini;
  title: string[];
};

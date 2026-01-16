import type { Gpx, Stats, Termini } from '@/types';

export type Data = {
  gpx: Gpx;
  index: string;
  slug: string;
  stats: Stats;
  termini: Termini;
  title: string[];
};

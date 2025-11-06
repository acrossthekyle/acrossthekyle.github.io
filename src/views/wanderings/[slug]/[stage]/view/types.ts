import type { Navigation, Stats, Termini } from '@/types';

export type Data = {
  date: string;
  description: string[];
  elevation: string[];
  hasElevation: boolean;
  hasRoute: boolean;
  hasStats: boolean;
  image: string;
  label: string;
  next?: Navigation;
  previous?: Navigation;
  route: [number, number][];
  slug: string;
  stage: string;
  stats: Stats;
  termini: Termini;
  title: string[];
};

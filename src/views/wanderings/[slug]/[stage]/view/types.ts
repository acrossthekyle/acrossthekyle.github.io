import type { Navigation, Stats, Termini } from '@/types';

export type Data = {
  date: string;
  description: string[];
  elevation: string[] | null;
  hasElevation: boolean;
  hasRoute: boolean;
  hasStats: boolean;
  image: string;
  label: string;
  next?: Navigation;
  previous?: Navigation;
  route: number[][] | null;
  slug: string;
  stage: string;
  stats: Stats;
  termini: Termini;
  title: string[];
};

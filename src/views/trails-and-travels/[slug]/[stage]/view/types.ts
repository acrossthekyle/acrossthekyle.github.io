import type { Navigation, Termini } from '@/types';

export type Data = {
  date: string;
  description: string[];
  excerpt: string;
  hasGpx: boolean;
  hasNavigation: boolean;
  image: string;
  index: string;
  label: string;
  location: string[];
  next?: Navigation;
  parent: string[];
  previous?: Navigation;
  slug: string;
  snippet: string;
  termini: Termini;
  total: string;
  title: string[];
};

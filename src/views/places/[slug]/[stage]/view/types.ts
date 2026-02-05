import type { Navigation, Termini } from '@/types';

export type Data = {
  content: string;
  date: string;
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
  readingTime: string;
  slug: string;
  snippet: string;
  termini: Termini;
  total: string;
  title: string[];
};

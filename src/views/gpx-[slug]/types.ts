import type { Gpx, StatFull, StatShort } from '@/types';

export type Stats = {
  distance: StatFull | null;
  gain: StatFull | null;
  loss: StatFull | null;
  max: StatFull | null;
  time: StatShort | null;
};

export type Data = {
  date: string;
  gpx: Gpx;
  hasNavigation: boolean;
  index: string;
  location: string;
  next: string;
  place: string;
  previous: string;
  slug: string;
  stats: Stats;
  title: string;
  total: string;
};


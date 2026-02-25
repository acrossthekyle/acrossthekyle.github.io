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
  label: string;
  location: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  next: string;
  place: string;
  previous: string;
  slug: string;
  title: string;
  total: string;
};


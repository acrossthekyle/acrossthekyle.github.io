import type { Gpx, StatFull, StatShort } from '@/types';

export type Stats = {
  distance: StatFull | null;
  gain: StatFull | null;
  loss: StatFull | null;
  max: StatFull | null;
  time: StatShort | null;
};

export type Details = {
  content: string;
  date: string;
  gpx: Gpx;
  readingTime: string;
  stats: Stats;
};

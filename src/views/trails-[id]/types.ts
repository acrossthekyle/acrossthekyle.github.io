import type { Stat } from '@/types';

export type Gpx = [number, number][];

export type Stage = {
  altitudeEnd: Stat;
  altitudeMax: Stat;
  altitudeStart: Stat;
  beginning: Stat;
  coordinates: string;
  distance: Stat;
  elevation: number[];
  elevationGain: Stat;
  elevationLoss: Stat;
  ending: Stat;
  hours: Stat;
  index: number;
  latLong: Gpx;
  location: string;
  termini: string;
  when: string;
};

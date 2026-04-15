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

export type Trail = {
  albumId: string;
  altitudeMax: Stat;
  continent: string;
  coordinates: string;
  days: string;
  description: string;
  distance: Stat;
  duration: string;
  elevationGain: Stat;
  elevationLoss: Stat;
  end: Stat;
  id: string;
  initials: string;
  location: string;
  position: string[];
  stages: Stage[];
  start: Stat;
  title: string;
  type: string;
  when: string;
};

export type More = {
  albumId: string;
  coordinates: string;
  id: string;
  location: string;
  title: string;
  type: string;
  when: string;
};

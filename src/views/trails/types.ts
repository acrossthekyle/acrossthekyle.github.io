import type { Stat } from '@/types';

export type Trail = {
  coordinates: string;
  distance: Stat;
  days: string;
  duration: string;
  id: string;
  location: string;
  position: string[];
  title: string;
  type: string;
  when: string;
};

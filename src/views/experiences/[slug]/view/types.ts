import type { Stage } from '@/types';

export type Data = {
  date: string;
  description: string[];
  gearWeight: string;
  hasGear: boolean;
  label: string;
  location: string;
  slug: string;
  stages: Stage[];
  title: string[];
  type: string;
};

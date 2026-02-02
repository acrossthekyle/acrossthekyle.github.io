import type { Date, Stage } from '@/types';

export type Data = {
  date: Date;
  description: string[];
  gearWeight: string;
  hasGear: boolean;
  label: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  stages: Stage[];
  title: string[];
  total: number;
  type: string;
};

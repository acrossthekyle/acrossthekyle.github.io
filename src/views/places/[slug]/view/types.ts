import type { Date } from '@/types';

export type Data = {
  date: Date;
  description: string[];
  hasGear: boolean;
  label: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  stages: Array<{
    image: string;
    index: string;
  }>;
  title: string[];
  total: number;
};

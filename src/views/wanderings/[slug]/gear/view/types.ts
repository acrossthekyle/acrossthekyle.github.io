import type { GearCategory } from '@/types';

export type Data = {
  categories: GearCategory[];
  slug: string;
  title: string[];
  weights: {
    base: string;
  };
};

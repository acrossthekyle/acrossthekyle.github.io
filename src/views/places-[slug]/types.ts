import type { Stat } from '@/types';

export type Data = {
  description: string[];
  images: Array<{
    index: string;
    src: string;
  }>;
  isDestination: boolean;
  label: string;
  location: string;
  position: {
    left: string;
    top: string;
  };
  slug: string;
  stages: Array<{
    index: string;
    title: string;
  }>;
  stats: Stat[];
  title: string;
  type: string;
  total: string;
  year: string;
};

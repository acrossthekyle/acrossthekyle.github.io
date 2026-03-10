import type { Stat } from '@/types';

export type Data = {
  back: Array<{
    text: string;
    uri: string;
  }>;
  elevation: number[];
  hasNavigation: boolean;
  metrics: Stat[];
  next: string;
  previous: string;
  slug: string;
  subTitle: string;
  title: string;
};


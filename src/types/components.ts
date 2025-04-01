import type { Post } from './post';
import type { Print } from './print';

export type Breadcrumb = {
  text: string;
  uri?: string;
};

export type MasonryItem = Post | Print;

import { headers } from 'next/headers';

import { getHierarchy } from '@/utils';

type Model = {
  base: string;
  isOnChild: boolean;
  isOnParent: boolean;
  isOnRoot: boolean;
  path: string;
  previous: string;
  search: string;
};

export async function useServerHierarchy(): Promise<Model> {
  const all = await headers();

  const path = all.get('x-across-path') || '';
  const search = all.get('x-across-search') || '';

  return {
    ...getHierarchy(path),
    path,
    search: search.replace('?', ''),
  };
}

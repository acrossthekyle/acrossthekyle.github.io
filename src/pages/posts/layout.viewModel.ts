'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Hooks from '@/hooks';
import type { Components, Posts } from '@/types';
import Utils from '@/utils';

type Return = Omit<Posts.Post, 'titleCombined'> & {
  breadcrumbs: Components.Breadcrumb[];
  date: string;
  hasStage: boolean;
  image: string;
  isReady: boolean;
  metadata: string;
  newer: Posts.Newer;
  older: Posts.Older;
  pack: string;
  route?: Posts.Route;
  stats?: Posts.Stats;
  tags: string[];
  title: string;
  uri: string;
};

export const useViewModel = (): Return => {
  const { data, fetchData, isReady } = Hooks.useApi();

  const { route } = useRouter();

  useEffect(() => {
    const { id, day } = Utils.getPostParameters(route);

    fetchData(`posts/${id}?day=${day}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return {
    breadcrumbs: data?.breadcrumbs,
    date: data?.date,
    hasStage: data?.hasStage,
    isReady,
    image: data?.image || '',
    metadata: data?.titleCombined || '',
    newer: data?.newer,
    older: data?.older,
    pack: data?.pack || '',
    route: data?.route,
    stats: data?.stats,
    tags: data?.tags || [],
    title: data?.title || '',
    uri: data?.uri || '',
  };
};

export default function Node() {
  return null;
}

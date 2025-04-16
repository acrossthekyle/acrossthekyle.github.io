'use client';

import dynamic from 'next/dynamic';

import type { Posts } from '@/types';

import { useViewModel } from './layout.component.route.viewModel';

const RouteMap = dynamic(() => import('@/components/posts/route'), {
  ssr: false,
});

function Route({ id, ...rest }: Posts.Route) {
  const { route } = useViewModel(id);

  return <RouteMap {...rest} route={route} />;
}

export default Route;

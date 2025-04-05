'use client';

import { usePostsForMapData } from '@/data/posts';

import World from './world';

function Trips() {
  const { data, isReady } = usePostsForMapData();

  if (!isReady) {
    return null;
  }

  return <World markers={data} />;
}

export default Trips;

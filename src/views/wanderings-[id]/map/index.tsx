'use client';

import dynamic from 'next/dynamic';

import type { Collection } from '@/types';

import { styles } from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  collection: Collection;
};

export default function Map({ collection }: Props) {
  return (
    <Plugin collection={collection} />
  );
}

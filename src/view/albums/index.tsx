'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { useDialog } from '@/hooks/useDialog';

import { Dialog, DialogContent, DialogHeader } from '../dialog';
import type { Album } from '../types';

import Details from './details';
import styles from './stylesheet';

type Props = {
  data: Album[];
  isActive: boolean;
};

const Plugin = dynamic(() => import('./swiper'), {
  ssr: false,
});

export default function Albums({ data, isActive }: Props) {
  const [active, setActive] = useState<Data | null>(null);

  const { onOpen } = useDialog();

  const handleOnClick = (album: Album) => {
    onOpen();

    setActive(album);
  };

  if (!isActive) {
    return null;
  }

  return (
    <>
      <Plugin data={data} onClick={handleOnClick} />
      <Dialog id="details">
        <Details data={active} />
      </Dialog>
    </>
  );
}

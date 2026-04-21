'use client';

import dynamic from 'next/dynamic';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Album[];
};

const Plugin = dynamic(() => import('./swiper'), {
  ssr: false,
});

export default function Albums({ data }: Props) {
  const { onOpen } = useDialog();
  const { current } = useView();

  const handleOnClick = (album: Album) => {
    onOpen({
      data: {
        album,
      },
      template: 'album',
    });
  };

  return (
    <div className={styles.mountable(current === 'albums')}>
      <Plugin data={data} onClick={handleOnClick} />
    </div>
  );
}

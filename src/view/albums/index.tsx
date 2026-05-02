'use client';

import dynamic from 'next/dynamic';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';
import { Ui } from '@/ui';

type Props = {
  data: Album[];
};

const Plugin = dynamic(() => import('./swiper'), {
  ssr: false,
});

export default function Albums({ data }: Props) {
  const { onDialog } = useDialog();
  const { view } = useView();

  const handleOnClick = (album: Album) => {
    onDialog({
      data: {
        album,
      },
      delay: true,
      template: 'image',
    });
  };

  return (
    <Ui.Containers.Mountable isActive={view === 'albums'}>
      <Plugin data={data} onClick={handleOnClick} />
    </Ui.Containers.Mountable>
  );
}

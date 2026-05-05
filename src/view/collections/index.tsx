'use client';

import dynamic from 'next/dynamic';

import { useFilter } from '@/hooks/useFilter';
import { useOptions } from '@/hooks/useOptions';
import { useView } from '@/hooks/useView';
import type { Collection } from '@/types';
import { Ui } from '@/ui';

type Props = {
  collections: Collection[];
};

const Plugin = dynamic(() => import('./swiper'), {
  ssr: false,
});

export default function Collections({ collections }: Props) {
  const { onFilter } = useFilter();
  const { color } = useOptions();
  const { onView, view } = useView();

  const handleOnClick = (collection: Collection) => {
    onFilter(collection.id);

    onView('collection');
  };

  return (
    <Ui.Containers.Mountable isActive={view === 'collections'}>
      <Plugin colorMode={color} data={collections} onClick={handleOnClick} />
    </Ui.Containers.Mountable>
  );
}

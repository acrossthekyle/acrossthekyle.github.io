'use client';

import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';

import type { Collection } from '@/types';
import { trimCardinal } from '@/utils';

import { styles } from './stylesheet';

const Plugin = dynamic(() => import('./leaflet'), {
  ssr: false,
});

type Props = {
  collections: Collection[];
};

export default function Map({ collections }: Props) {
  const params = useParams();
  const router = useRouter();

  const current = params.id ?? null;
  const collection = collections.find(item => item.id === current);

  const handleOnClick = (id: string) => {
    router.push(`/wanderings/${id}`);
  };

  return (
    <>
      <Plugin
        collections={collections}
        current={current}
        onClick={handleOnClick}
      />
      <p className={styles.caption}>
        {current && collection ? (
          <>
            {collection.coordinates} &mdash; {collection.location.country}, {trimCardinal(collection.location.continent)}
          </>
        ) : (
          <>
            5 continents, 12 countries
          </>
        )}
      </p>
    </>
  );
}

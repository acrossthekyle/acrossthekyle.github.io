'use client';

import { ReactNode } from 'react';

import Directory from '@/ui/directory';
import { getStaticType, getTripDate } from '@/utils';

import { useModel } from './model';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isLoading, trips } = useModel();

  return (
    <>
      <Directory
        align="start"
        isLoading={isLoading}
        items={trips.map((trip) => ({
          meta: [getStaticType(trip.type), getTripDate(trip.date)],
          path: `/travels/${trip.slug}`,
          text: trip.title,
        }))}
      />
      {children}
    </>
  );
}

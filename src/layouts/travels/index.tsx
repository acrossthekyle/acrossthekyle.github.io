'use client';

import { ReactNode } from 'react';

import Directory from '@/ui/directory';
import { getTripDate } from '@/utils';

import { useModel } from './model';
import { getStaticType } from './utils';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isLoading, trips } = useModel();

  if (isLoading) {
    return null; // todo
  }

  return (
    <>
      <Directory
        align="start"
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

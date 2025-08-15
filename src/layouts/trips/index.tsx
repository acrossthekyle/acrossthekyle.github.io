'use client';

import { ReactNode } from 'react';

import Directory from '@/ui/directory';

import { useModel } from './model';

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
          path: `/wanderings/${trip.slug}`,
          text: trip.title,
        }))}
      />
      {children}
    </>
  );
}

'use client';

import { ReactNode } from 'react';

import Directory from '@/ui/directory';
import Title from '@/ui/title';
import { getDate } from '@/utils';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { filters, isLoading, isOnTravels, travels } = useModel();

  return (
    <>
      {isOnTravels && <Title className={styles.title}>Travels</Title>}
      <Directory
        align="start"
        filters={filters}
        isLoading={isLoading}
        items={travels.map((travel) => ({
          meta: [travel.type, getDate(travel.date)],
          path: `/travels/${travel.slug}`,
          text: travel.title,
        }))}
      />
      {children}
    </>
  );
}

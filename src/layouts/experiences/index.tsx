'use client';

import { ReactNode } from 'react';

import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';

import { useModel } from './model';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { data, isLoading, ref } = useModel();

  return (
    <>
      <Directory align="start">
        <DirectoryItems>
          {isLoading && Array.from({ length: 13 }).map((_, index) => (
            <DirectoryItem key={index} index={index}>
              <DirectoryLoading lines={2} />
            </DirectoryItem>
          ))}
          {!isLoading && data.map((item, index: number) => (
            <DirectoryItem index={index} key={index}>
              <DirectoryLink href={`/experiences/${item.slug}`} ref={ref}>
                <DirectoryText text={item.title} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
      {children}
    </>
  );
}

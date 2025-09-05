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
  const { isLoading, ref, data } = useModel();

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
              <DirectoryLink href={item.path} ref={ref}>
                <DirectoryText text={item.text} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
      {children}
    </>
  );
}

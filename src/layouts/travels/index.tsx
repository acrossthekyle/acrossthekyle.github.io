'use client';

import { ReactNode } from 'react';

import {
  Directory,
  DirectoryItem,
  DirectoryEyebrow,
  DirectoryLink,
  DirectoryNumber,
  DirectoryText,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';

import { useModel } from './model';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isLoading, ref, travels } = useModel();

  return (
    <>
      <Directory align="start">
        <DirectoryItems>
          {isLoading && Array.from({ length: 13 }).map((_, index) => (
            <DirectoryItem key={index} index={index}>
              <DirectoryLoading lines={2} />
            </DirectoryItem>
          ))}
          {!isLoading && travels.map((travel, index: number) => (
            <DirectoryItem index={index} key={index}>
              <DirectoryLink href={travel.path} ref={ref}>
                <DirectoryEyebrow text={travel.meta}>
                  <DirectoryNumber index={index} />
                </DirectoryEyebrow>
                <DirectoryText text={travel.text} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
      {children}
    </>
  );
}

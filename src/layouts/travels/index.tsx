'use client';

import { ReactNode } from 'react';

import {
  Directory,
  DirectoryItem,
  DirectoryEyebrow,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';
import {
  FilterCount,
  FilterItem,
  FilterLink,
  FilterLoading,
  FilterSlash,
  Filters,
} from '@/ui/filters';

import { useModel } from './model';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Layout({ children }: Props) {
  const { filters, isLoading, ref, total, travels } = useModel();

  return (
    <>
      <Directory align="start">
        <Filters>
          {isLoading && (
            <>
              <FilterItem>
                <FilterLoading size="small" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="medium" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="large" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="medium" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="medium" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="large" />
              </FilterItem>
              <FilterItem>
                <FilterLoading size="medium" />
              </FilterItem>
            </>
          )}
          {!isLoading && (
            <>
              <FilterItem>
                <FilterLink>
                  All
                  <FilterCount value={total}/>
                </FilterLink>
                <FilterSlash />
              </FilterItem>
              {filters.map((filter, index: number) => (
                <FilterItem key={index}>
                  <FilterLink parameter={filter.filter}>
                    {filter.name}
                    <FilterCount value={filter.count}/>
                  </FilterLink>
                  {index !== filters.length - 1 && (
                    <FilterSlash />
                  )}
                </FilterItem>
              ))}
            </>
          )}
        </Filters>
        <DirectoryItems>
          {isLoading && Array.from({ length: 13 }).map((_, index) => (
            <DirectoryItem key={index} index={index}>
              <DirectoryLoading lines={2} />
            </DirectoryItem>
          ))}
          {!isLoading && travels.map((travel, index: number) => (
            <DirectoryItem index={index} key={index}>
              <DirectoryLink href={travel.path} ref={ref}>
                <DirectoryEyebrow text={travel.meta} />
                <DirectoryText index={index} text={travel.text} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
      {children}
    </>
  );
}

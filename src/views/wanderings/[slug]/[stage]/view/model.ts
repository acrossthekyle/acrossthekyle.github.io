'use client';

import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import type { Data } from './types';

export function useModel(data: Data | null) {
  const router = useRouter();

  useEvent('onPrevious', () => {
    if (data !== null) {
      if (data.previous) {
        router.push(`/wanderings/${data.slug}/${data.previous.index}`);
      }
    }
  });

  useEvent('onNext', () => {
    if (data !== null) {
      if (data.next) {
        router.push(`/wanderings/${data.slug}/${data.next.index}`);
      }
    }
  });
};

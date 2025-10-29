'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useEvent } from '@/hooks/useEvent';

import type { Data } from './types';

export function useModel(data: Data | null) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

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

'use client';

import { useRouter } from 'next/navigation';

import type { Image } from '@/types';

type Props = {
  all: Image[];
  current: number;
  id: string;
  total: number;
};

export function useNavigation({
  all,
  current,
  id,
  total,
}: Props) {
  const router = useRouter();

  const urlPrefix = `/index/${id}/images?ref=`;

  const handleOnNavigate = (imageId: string, doNotSnap?: boolean) => {
    router.replace(
      [urlPrefix, imageId].join(''),
      {
        scroll: false
      },
    );

    if (!doNotSnap) {
      const image = document.getElementById(imageId);

      if (image) {
        image.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handleOnNext = () => {
    if (current === (total - 1)) {
      handleOnNavigate(all[0]?.id || '');
    } else {
      handleOnNavigate(all[current + 1]?.id || '');
    }
  };

  const handleOnPrevious = () => {
    if (current === 0) {
      handleOnNavigate(all[total - 1]?.id || '');
    } else {
      handleOnNavigate(all[current - 1]?.id || '');
    }
  };

  const handleOnRange = (index: number) => {
    handleOnNavigate(all[index]?.id || '');
  };

  return {
    onNavigate: handleOnNavigate,
    onNext: handleOnNext,
    onPrevious: handleOnPrevious,
    onRange: handleOnRange,
  };
}

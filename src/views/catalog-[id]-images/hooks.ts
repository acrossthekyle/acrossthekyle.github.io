'use client';

import { useRouter } from 'next/navigation';

import type { Image } from '@/types';

type Props = {
  all: Image[];
  current: number;
  id: string;
  onNavigate: (index: number) => void;
  total: number;
};

export function useNavigation({
  all,
  current,
  id,
  onNavigate,
  total,
}: Props) {
  const router = useRouter();

  const urlPrefix = `/index/${id}/images?ref=`;

  const handleOnNavigate = (imageId: string) => {
    router.replace(
      [urlPrefix, imageId].join(''),
      {
        scroll: false
      },
    );

    const image = document.getElementById(imageId);

    if (image) {
      image.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handleOnNext = () => {
    if (current === (total - 1)) {
      handleOnNavigate(all[0]?.id || '');

      onNavigate(0);
    } else {
      handleOnNavigate(all[current + 1]?.id || '');

      onNavigate(current + 1);
    }
  };

  const handleOnPrevious = () => {
    if (current === 0) {
      handleOnNavigate(all[total - 1]?.id || '');

      onNavigate(total - 1);
    } else {
      handleOnNavigate(all[current - 1]?.id || '');

      onNavigate(current - 1);
    }
  };

  const handleOnRange = (index: number) => {
    handleOnNavigate(all[index]?.id || '');

    onNavigate(index);
  };

  return {
    onNext: handleOnNext,
    onPrevious: handleOnPrevious,
    onRange: handleOnRange,
  };
}

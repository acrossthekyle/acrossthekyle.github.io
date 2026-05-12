'use client';

import { useMemo } from 'react';

import { useFilter } from '@/hooks/useFilter';
import { useSort } from '@/hooks/useSort';
import { useView } from '@/hooks/useView';
import { useWindow } from '@/hooks/useWindow';
import type { Data } from '@/types';

import { getImage, getOrder } from './utils';

const COLUMNS = {
  1098: 5,
  768: 4,
  640: 3,
  320: 2,
  0: 1,
};

export function useImages(images: Data[]) {
  const { filter } = useFilter();
  const { sort } = useSort();
  const { view } = useView();
  const { width } = useWindow();

  const filtered = images.filter(image => getImage(image, filter, view));
  const sortedImages = useMemo(() => getOrder(filtered, sort), [filtered, sort]);

  const count = useMemo(() => {
    if (!width) {
      return 1;
    }

    let result = 1;

    for (const [key, value] of Object.entries(COLUMNS)) {
      if (width >= key) {
        result = value;
      }
    }

    return result;
  }, [width]);

  const columns = useMemo(() => {
    const data: Data[][] = Array.from({ length: count }, () => []);

    sortedImages.forEach((image, index) => {
      data[index % count].push(image);
    });

    return data;
  }, [sortedImages, count]);

  return {
    columns,
    sorted: sortedImages,
  };
};

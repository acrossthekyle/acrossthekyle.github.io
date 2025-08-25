'use client';

import { useCallback, useEffect, useState } from 'react';

import { useZoom } from '@/hooks/useZoom';
import { useTravels } from '@/hooks/useTravels';
import type { Stage, Travel } from '@/types';

import Figure from './figure';

type Model = {
  handleOnMaximize: (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => void;
  handleOnViewMore: () => void;
  shown: number;
  travel?: Travel;
};

const AMOUNT_SHOWN = 6;

export function useModel(slug: string): Model {
  const { find, travel } = useTravels();

  const { zoomOut, zoom } = useZoom();

  const [shown, setShown] = useState(AMOUNT_SHOWN);

  useEffect(() => {
    find(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnViewMore = useCallback(() => {
    setShown(shown + AMOUNT_SHOWN);
  }, [shown]);

  const handleOnMinimize = () => {
    zoomOut();
  };

  const handleOnMaximize = (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => {
    if (!travel) {
      return;
    }

    zoom({
      content: (
        <Figure
          activeGalleryIndex={galleryIndex}
          isFullscreen
          label={travel.label}
          onMinimize={handleOnMinimize}
          stage={stage}
          total={travel.stats.length.value}
          type={travel.type}
        />
      ),
      ref,
    });
  };

  return {
    handleOnMaximize,
    handleOnViewMore,
    shown,
    travel,
  };
}

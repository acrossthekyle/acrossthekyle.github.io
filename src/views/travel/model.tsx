'use client';

import { useCallback, useEffect, useState } from 'react';

import { useModal } from '@/hooks/useModal';
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

  const { closeModal, modal } = useModal();

  const [shown, setShown] = useState(AMOUNT_SHOWN);

  useEffect(() => {
    find(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnViewMore = useCallback(() => {
    setShown(shown + AMOUNT_SHOWN);
  }, [shown]);

  const handleOnMinimize = () => {
    closeModal();
  };

  const handleOnMaximize = (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => {
    if (!travel) {
      return;
    }

    modal({
      content: (
        <Figure
          activeGalleryIndex={galleryIndex}
          isFullscreen
          label={travel.label}
          onMinimize={handleOnMinimize}
          stage={stage}
          total={travel.stats.length.value}
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

'use client';

import { useCallback, useEffect, useState } from 'react';

import { useModal } from '@/hooks/useModal';
import { useTrips } from '@/hooks/useTrips';
import type { Stage, Trip } from '@/types';

import Figure from './figure';

type Model = {
  handleOnMaximize: (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => void;
  handleOnViewMore: () => void;
  shown: number;
  trip: Trip | undefined;
};

const AMOUNT_SHOWN = 6;

export function useModel(slug: string): Model {
  const { find } = useTrips();

  const { closeModal, modal } = useModal();

  const [shown, setShown] = useState(AMOUNT_SHOWN);
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    const getTrip = async () => {
      const result = await find(slug);

      setTrip(result);
    }

    getTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnViewMore = useCallback(() => {
    setShown(shown + AMOUNT_SHOWN);
  }, [shown]);

  const handleOnMinimize = () => {
    closeModal();
  };

  const handleOnMaximize = (stage: Stage, ref: React.RefObject<HTMLFrameElement | null>, galleryIndex: number) => {
    if (!trip) {
      return;
    }

    modal({
      content: (
        <Figure
          activeGalleryIndex={galleryIndex}
          isFullscreen
          label={trip.label}
          onMinimize={handleOnMinimize}
          stage={stage}
          total={trip.stats.length.value}
        />
      ),
      ref,
    });
  };

  return {
    handleOnMaximize,
    handleOnViewMore,
    shown,
    trip,
  };
}

'use client';

import { useEffect, useState } from 'react';

import { useModal } from '@/hooks/useModal';
import { useTrips } from '@/hooks/useTrips';
import type { Trip } from '@/types';

import Gear from './gear';
import Timeline from './timeline';

type Model = {
  handleOnFullscreen: (index: number) => void;
  handleOnGear: () => void;
  isLoading: boolean;
  trip: Trip | undefined;
};

export function useModel(slug: string): Model {
  const { find, isLoading } = useTrips();

  const { closeModal, modal } = useModal();

  const [trip, setTrip] = useState<Trip | undefined>();

  const getTrip = async () => {
    const result = await find(slug);

    setTrip(result);
  }

  useEffect(() => {
    getTrip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnFullscreen = (index: number) => {
    if (trip) {
      modal({
        content: <Timeline isFullscreen index={index} trip={trip} />,
      });
    }
  };

  const handleOnGear = () => {
    if (trip) {
      modal({
        content: <Gear onClose={closeModal} trip={trip} />,
      });
    }
  };

  return {
    handleOnFullscreen,
    handleOnGear,
    isLoading,
    trip,
  };
}

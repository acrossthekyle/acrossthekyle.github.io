'use client';

import { useState } from 'react';

import { useModal } from '@/hooks/useModal';

import { type Trip } from '../types';
import { Stage, Time } from './types';

type Model = {
  currentIndex: number;
  handleOnGear: () => void;
  handleOnIndexChange: (index: number) => void;
  handleOnNext: () => void;
  handleOnClose: () => void;
  handleOnPrevious: () => void;
  isGearActive: boolean;
  stages: Stage[];
};

export function useModel(trip: Trip): Model {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGearActive, setIsGearActive] = useState(false);

  const { handleOnClose: handleOnModalClose } = useModal();

  const handleOnIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleOnNext = () => {
    setCurrentIndex(
      currentIndex === trip.stages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleOnPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? trip.stages.length - 1 : currentIndex - 1
    );
  };

  const handleOnClose = () => {
    handleOnModalClose();
  };

  const handleOnGear = () => {
    setIsGearActive(!isGearActive);
  };

  const stages: Stage[] = trip.stages.map(({ image, stats, title }): Stage => {
    const distance = stats
      .find((stat) => stat.type === 'total-distance')?.value || '';
    const time = stats
      .find((stat) => stat.type === 'total-time')?.value || {
        hours: '0',
        minutes: '0',
      };
    const altitude = stats
      .find((stat) => stat.type === 'max-altitude')?.value || '';

    return {
      image,
      stats: {
        altitude: altitude as unknown as string,
        distance: distance as unknown as string,
        time: time as unknown as Time,
      },
      title,
    };
  });

  return {
    currentIndex,
    handleOnClose,
    handleOnGear,
    handleOnIndexChange,
    handleOnNext,
    handleOnPrevious,
    isGearActive,
    stages,
  };
}

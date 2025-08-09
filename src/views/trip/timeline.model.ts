'use client';

import { useEffect, useState } from 'react';

import { useModal } from '@/hooks/useModal';
import type { Trip } from '@/types';

type Model = {
  activeImages: string[];
  activeImageIndex: number;
  activeIndex: number;
  handleOnMiniscreen: () => void;
  handleOnNext: () => void;
  handleOnPrevious: () => void;
};

export function useModel(trip: Trip, index?: number): Model {
  const { closeModal } = useModal();

  const [activeIndex, setActiveIndex] = useState(index ?? -1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);

  useEffect(() => {
    if (activeIndex !== -1) {
      setActiveImages([
        trip.stages[activeIndex].images.hero,
        ...trip.stages[activeIndex].images.supplementary,
      ]);
    }
  }, [activeIndex, trip.stages]);

  const handleOnPrevious = () => {
    handleNavigation('previous');
  };

  const handleOnNext = () => {
    handleNavigation('next');
  };

  const handleNavigation = (direction: 'next' | 'previous') => {
    const total = activeImages.length > 1 ? (activeImages.length - 1) : (trip.stages.length - 1);
    const current = activeImages.length > 1 ? activeImageIndex : activeIndex;
    const callback = activeImages.length > 1 ? setActiveImageIndex : setActiveIndex;

    if (direction === 'next') {
      callback(current === total ? 0 : current + 1);
    } else {
      callback(current === 0 ? total : current - 1);
    }
  };

  const handleOnMiniscreen = () => {
    closeModal();
  };

  return {
    activeImages,
    activeImageIndex,
    activeIndex,
    handleOnMiniscreen,
    handleOnNext,
    handleOnPrevious,
  };
}

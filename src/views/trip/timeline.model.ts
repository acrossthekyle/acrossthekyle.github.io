'use client';

import { useEffect, useState } from 'react';
import { SwipeEventData, useSwipeable } from 'react-swipeable';

import { useModal } from '@/hooks/useModal';
import type { Trip } from '@/types';

type Model = {
  activeImages: string[];
  activeImageIndex: number;
  activeIndex: number;
  handleOnCarouselNext: () => void;
  handleOnCarouselPrevious: () => void;
  handleOnMiniscreen: () => void;
  handleOnNavigationNext: () => void;
  handleOnNavigationPrevious: () => void;
  swipeable: any; // todo
};

export function useModel(trip: Trip, index?: number): Model {
  const { closeModal } = useModal();

  const [activeIndex, setActiveIndex] = useState(index ?? -1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeImages, setActiveImages] = useState<string[]>([]);

  useEffect(() => {
    if (activeIndex !== -1) {
      setActiveImages([
        trip.stages[activeIndex]?.images.hero,
        ...trip.stages[activeIndex]?.images.supplementary,
      ]);
    }
  }, [activeIndex, trip.stages]);

  const handleOnNavigationPrevious = () => {
    const total = trip.stages.length - 1;
    const current = activeIndex;

    setActiveIndex(current === 0 ? total : current - 1);
    setActiveImageIndex(0);
  };

  const handleOnNavigationNext = () => {
    const total = trip.stages.length - 1;
    const current = activeIndex;

    setActiveIndex(current === total ? 0 : current + 1);
    setActiveImageIndex(0);
  };

  const handleOnCarouselNext = () => {
    const total = activeImages.length - 1;
    const current = activeImageIndex;

    setActiveImageIndex(current === total ? 0 : current + 1);
  };

  const handleOnCarouselPrevious = () => {
    const total = activeImages.length - 1;
    const current = activeImageIndex;

    setActiveImageIndex(current === 0 ? total : current - 1);
  };

  const handleOnMiniscreen = () => {
    closeModal();
  };

  const swipeable = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      if (eventData.dir.toLowerCase() === 'left') {
        handleOnNavigationNext();
      } else if (eventData.dir.toLowerCase() === 'right') {
        handleOnNavigationPrevious();
      }
    },
  });

  return {
    activeImages,
    activeImageIndex,
    activeIndex,
    handleOnCarouselNext,
    handleOnCarouselPrevious,
    handleOnMiniscreen,
    handleOnNavigationNext,
    handleOnNavigationPrevious,
    swipeable,
  };
}

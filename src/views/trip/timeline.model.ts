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

  const [activeIndex] = useState(index ?? -1);
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
    setActiveImageIndex(
      activeImageIndex === 0
        ? activeImages.length - 1
        : activeImageIndex - 1,
    );
  };

  const handleOnNext = () => {
    setActiveImageIndex(
      activeImageIndex === activeImages.length - 1
        ? 0
        : activeImageIndex + 1,
    );
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

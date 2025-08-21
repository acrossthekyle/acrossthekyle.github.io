'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { Images } from '@/types';

type Model = {
  figureRef: React.RefObject<HTMLFrameElement | null>;
  gallery: string[];
  galleryIndex: number;
  handleOnGalleryNext: () => void;
  handleOnGalleryPrevious: () => void;
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
};

export function useModel(images: Images, activeGalleryIndex: number): Model {
  const [gallery, setGallery] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(activeGalleryIndex);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const figureRef = useRef<HTMLFrameElement | null>(null);

  useEffect(() => {
    setGallery([
      images.hero,
      ...images.supplementary,
    ]);
  }, [images]);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      setHasEnteredView(isInView);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasEnteredView],
  );

  const handleOnGalleryNext = () => {
    const total = gallery.length - 1;
    const current = galleryIndex;

    setGalleryIndex(current === total ? 0 : current + 1);
  };

  const handleOnGalleryPrevious = () => {
    const total = gallery.length - 1;
    const current = galleryIndex;

    setGalleryIndex(current === 0 ? total : current - 1);
  };

  return {
    figureRef,
    gallery,
    galleryIndex,
    handleOnInView,
    handleOnGalleryNext,
    handleOnGalleryPrevious,
    hasEnteredView,
  };
}

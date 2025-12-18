'use client';

import { useContext } from 'react';

import { useZoom } from '@/hooks/useZoom';

import { ImageContext } from '../context';

type Model = {
  handleOnClick: () => void;
};

export function useModel(): Model {
  const { isLandscapeOrientation, src } = useContext(ImageContext);

  const { zoom } = useZoom();

  const handleOnClick = () => {
    zoom(src, isLandscapeOrientation);
  };

  return {
    handleOnClick,
  };
}

'use client';

import { useContext } from 'react';

import Contexts from '@/contexts';

type Return = {
  tile: string;
};

export const useViewModel = (): Return => {
  const { theme } = useContext(Contexts.ThemeContext);

  return {
    tile: `https://tiles.stadiamaps.com/tiles/alidade_smooth${theme === 'light' ? '' : '_dark'}/{z}/{x}/{y}{r}.png`,
  };
};

export default function Node() {
  return null;
}

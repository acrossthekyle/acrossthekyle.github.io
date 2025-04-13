'use client';

import { useCallback, useEffect, useState } from 'react';

import Constants from '@/constants';
import Hooks from '@/hooks';
import type { Packs } from '@/types';
import { Units } from '@/types/packs';
import Utils from '@/utils';

type Return = {
  canRenderPacks: boolean;
  handleOnChartClick: (segment: number) => void;
  handleOnChartHover: (value: string) => void;
  handleOnLegendClick: (value: string) => void;
  handleOnPackClick: (value: Packs.Pack) => void;
  handleOnUnitsClick: () => void;
  handleOnViewAllPacksClick: () => void;
  handleOnViewStatsClick: () => void;
  hoveredCategory: string;
  isLoading: boolean;
  isReady: boolean;
  pack: Packs.Pack;
  packs: Packs.Pack[];
  units: Units;
};

export const useViewModel = (): Return => {
  const { data, fetchData, isLoading, isReady } = Hooks.useApi();

  const [pack, setPack] = useState<Packs.Pack | undefined>();
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [units, setUnits] = useState(Units.Imperial);
  const [canRenderPacks, setCanRenderPacks] = useState(false);

  useEffect(() => {
    fetchData('packs', undefined, '1744557413');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const chosenPack = localStorage.getItem('pack');
      const chosenUnits: string | null = localStorage.getItem('units');

      if (chosenPack !== null) {
        setPack(JSON.parse(chosenPack));
      }

      if (chosenUnits !== null) {
        setUnits(chosenUnits as unknown as Units);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isReady && pack) {
      const filtered = data.filter(({ slug }) => slug === pack.slug);

      if (filtered.length > 0) {
        setPack(filtered[0]);
      }
    } else if (isReady) {
      setPack(data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isReady]);

  const handleOnChartClick = useCallback(
    (segment: number) => {
      Utils.scrollToElement(pack.categories[segment].category);
    },
    [pack],
  );

  const handleOnChartHover = useCallback(
    (value: string) => {
      setHoveredCategory(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hoveredCategory],
  );

  const handleOnLegendClick = (value: string) => {
    Utils.scrollToElement(value);
  };

  const handleOnViewAllPacksClick = useCallback(() => {
    setCanRenderPacks(!canRenderPacks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRenderPacks]);

  const handleOnViewStatsClick = useCallback(() => {
    setCanRenderPacks(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRenderPacks]);

  const handleOnPackClick = useCallback(
    (value: Packs.Pack) => {
      setPack(value);

      setCanRenderPacks(false);

      localStorage.setItem('pack', JSON.stringify(value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [canRenderPacks, pack],
  );

  const handleOnUnitsClick = useCallback(() => {
    const value = units === Units.Imperial ? Units.Metric : Units.Imperial;

    localStorage.setItem('units', value);

    setUnits(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  return {
    canRenderPacks,
    handleOnChartClick,
    handleOnChartHover,
    handleOnLegendClick,
    handleOnPackClick,
    handleOnUnitsClick,
    handleOnViewAllPacksClick,
    handleOnViewStatsClick,
    hoveredCategory,
    isLoading,
    isReady,
    pack,
    packs: data || [],
    units,
  };
};

export default function Node() {
  return null;
}

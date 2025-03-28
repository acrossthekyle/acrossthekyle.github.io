'use client';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { usePacksData } from '@/data/packs';
import type { ChartProps, Pack } from '@/types/packs';

import { CATEGORY_COLORS } from '../constants';

export const useViewModel = () => {
  const router = useRouter();

  const { data, getPacks, isLoading, isReady } = usePacksData();

  const [pack, setPack] = useState<Pack | undefined>();
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [units, setUnits] = useState('imperial');
  const [canRenderPacks, setCanRenderPacks] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const chosenUnits = searchParams.get('units') || 'imperial';

    setUnits(chosenUnits);

    getPacks(chosenUnits);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isReady && router.query.pack) {
      const filtered = data.filter(({ slug }) => slug === router.query.pack[0]);

      if (filtered.length > 0) {
        setPack(filtered[0]);
      }
    } else if (isReady) {
      setPack(data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isReady, router.query]);

  const handleOnChartClick = (index: number) => {
    handleOnLegendClick(pack.categories[index].category);
  };

  const handleOnChartHover = useCallback(
    (label: string) => {
      setHoveredCategory(label);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [hoveredCategory],
  );

  const handleOnLegendClick = (category: string) => {
    const content = document.getElementById(category);

    if (content) {
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleOnViewAllPacksClick = useCallback(() => {
    setCanRenderPacks(!canRenderPacks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRenderPacks]);

  const handleOnPackClick = useCallback(() => {
    setCanRenderPacks(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRenderPacks]);

  const handleOnUnitsClick = useCallback(
    (value: string) => {
      setUnits(value);

      getPacks(value);

      const parts = window.location.href.split('?units=');

      router.push(`${parts[0]}?units=${value}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [units],
  );

  return {
    canRenderPacks,
    data,
    handleOnChartClick,
    handleOnChartHover,
    handleOnLegendClick,
    handleOnPackClick,
    handleOnUnitsClick,
    handleOnViewAllPacksClick,
    hoveredCategory,
    isLoading,
    isReady,
    pack,
    units,
  };
};

export const useChartViewModel = ({
  categories,
  onClick,
  onHover,
  units,
}: ChartProps) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (categories) {
      setData(categories.map((category) => category.weight));
      setLabels(categories.map((category) => category.category));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return {
    data: {
      datasets: [
        {
          backgroundColor: CATEGORY_COLORS,
          borderColor: 'transparent',
          data,
        },
      ],
      labels,
    },
    options: {
      onClick: (event, elements) => {
        if (elements && elements?.length) {
          onClick(elements[0].index);
        }
      },
      onHover: (event, elements) => {
        if (elements && elements.length) {
          event.native.target.style.cursor = 'pointer';
        }

        if (!elements || elements?.length === 0) {
          onHover('');
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              onHover(context.label);

              return `${context.raw} ${units === 'metric' ? 'kg' : 'lbs'}`;
            },
          },
          displayColors: false,
        },
      },
    },
  };
};

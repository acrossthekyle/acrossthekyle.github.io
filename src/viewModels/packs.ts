'use client';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { CHART_CATEGORY_COLORS } from '@/constants/charts';
import { usePacksData } from '@/data/packs';
import type { ChartProps, Pack } from '@/types/packs';
import { scrollToTop } from '@/utils/scroll';

export const useViewModel = () => {
  const router = useRouter();

  const { data, isLoading, isReady } = usePacksData();

  const [pack, setPack] = useState<Pack | undefined>();
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [units, setUnits] = useState('imperial');
  const [canRenderPacks, setCanRenderPacks] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const chosenPack = localStorage.getItem('pack');
      const chosenUnits = localStorage.getItem('units');

      if (chosenPack !== null) {
        setPack(JSON.parse(chosenPack));
      }

      if (chosenUnits !== null) {
        setUnits(chosenUnits);
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
        block: 'center',
      });
    }
  };

  const handleOnViewAllPacksClick = useCallback(() => {
    setCanRenderPacks(!canRenderPacks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canRenderPacks]);

  const handleOnViewStatsClick = useCallback(() => {
    setCanRenderPacks(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnPackClick = useCallback(
    (pack: Pack) => {
      setPack(pack);

      localStorage.setItem('pack', JSON.stringify(pack));

      scrollToTop();

      setCanRenderPacks(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [canRenderPacks],
  );

  const handleOnUnitsClick = useCallback(
    (value: string) => {
      localStorage.setItem('units', value);

      setUnits(value);
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
    handleOnViewStatsClick,
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
          backgroundColor: CHART_CATEGORY_COLORS,
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

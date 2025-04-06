'use client';

import { useEffect, useState } from 'react';

import Constants from '@/constants';
import type { Packs } from '@/types';
import { Units } from '@/types/packs';

export const useViewModel = ({
  categories,
  onClick,
  onHover,
  units,
}: Packs.Chart) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setData(categories.map((category) => category.weight));
    setLabels(categories.map((category) => category.category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return {
    data: {
      datasets: [
        {
          backgroundColor: Constants.CATEGORY_COLORS,
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

              return `${context.raw} ${units === Units.Metric ? 'kg' : 'lbs'}`;
            },
          },
          displayColors: false,
        },
      },
    },
  };
};

export default function Node() {
  return null;
}

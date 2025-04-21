'use client';

import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import Constants from '@/constants';
import Styles from '@/styles';
import type { Packs } from '@/types';

const scss = Styles.Components.Packs.Chart;

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

type Props = {
  categories: Packs.Category[];
  units: string;
};

const Component = ({ categories, units }: Props) => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setData(categories.map((category) => category.weight));
    setLabels(categories.map((category) => category.category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <div className={scss.chart}>
      <Doughnut
        data={{
          datasets: [
            {
              backgroundColor: Constants.CATEGORY_COLORS,
              borderColor: 'transparent',
              data,
            },
          ],
          labels,
        }}
        height="260"
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.raw} ${units === 'metric' ? 'kg' : 'lbs'}`;
                },
              },
              displayColors: false,
            },
          },
        }}
        width="260"
      />
    </div>
  );
};

export default Component;

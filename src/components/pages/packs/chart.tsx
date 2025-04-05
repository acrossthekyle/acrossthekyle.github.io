'use client';

import React from 'react';
import {
  Chart as ChartJs,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from '@/styles/components/pages/packs/chart.module.scss';
import type { ChartProps } from '@/types';
import ViewModels from '@/models';

ChartJs.register(DoughnutController, ArcElement, Tooltip, Legend);

const Chart = (props: ChartProps) => {
  const model = ViewModels.usePacksChartViewModel(props);

  return (
    <div className={styles.chart}>
      <Doughnut {...model} height="260" width="260" />
    </div>
  );
};

export default Chart;

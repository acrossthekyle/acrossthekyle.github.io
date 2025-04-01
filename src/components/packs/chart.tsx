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

import type { ChartProps } from '@/types';
import ViewModels from '@/viewModels';

ChartJs.register(DoughnutController, ArcElement, Tooltip, Legend);

const Chart = (props: ChartProps) => {
  const model = ViewModels.usePacksChartViewModel(props);

  return <Doughnut {...model} height="260" width="260" />;
};

export default Chart;

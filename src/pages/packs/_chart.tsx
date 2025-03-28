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

import type { ChartProps } from '@/types/packs';
import { useChartViewModel } from '@/viewModels/packs';

ChartJs.register(DoughnutController, ArcElement, Tooltip, Legend);

const Chart = (props: ChartProps) => {
  const model = useChartViewModel(props);

  return <Doughnut {...model} height="260" width="260" />;
};

export default Chart;

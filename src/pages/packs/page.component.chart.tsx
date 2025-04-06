'use client';

import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Styles from '@/styles';
import type { Packs } from '@/types';

import { useViewModel } from './page.component.chart.viewModel';

const scss = Styles.Pages.Packs.PageComponentChart;

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const Component = (props: Packs.Chart) => {
  const data = useViewModel(props);

  return (
    <div className={scss.chart}>
      <Doughnut {...data} height="260" width="260" />
    </div>
  );
};

export default Component;

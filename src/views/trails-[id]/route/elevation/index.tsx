'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { useUnits } from '@/hooks/useUnits';
import { convertFeetToMeters } from '@/utils';

import type { Stage } from '../../types';
import { GpxContext } from '../context';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  stages: Stage[];
};

export default function Elevation({ stages }: Props) {
  const { units } = useUnits();

  const { activeIndex, onHover } = useContext(GpxContext);

  const handleMouseLeave = () => {
    onHover(null);
  };

  const elevation = stages[activeIndex].elevation;

  if (elevation.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className={styles.heading}>
        <span className={styles.eyebrow}>Elevation profile</span>
        GPX Data points
      </h3>
      <div className={styles.container} onMouseLeave={handleMouseLeave}>
        <Chart
          options={{
            chart: {
              animations: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
              dropShadow: {
                enabled: false,
              },
              zoom: {
                enabled: false,
              },
              height: '100%',
              width: '100%',
              parentHeightOffset: 0,
            },
            legend: {
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
            fill: {
              type: 'solid',
              colors: ['var(--foreground)'],
            },
            stroke: {
              colors: ['transparent'],
              curve: 'smooth',
              width: 1.5,
            },
            grid: {
              show: false,
              borderColor: 'transparent',
              padding: {
                top: 0,
                bottom: -32,
                right: 0,
                left: -10,
              },
            },
            xaxis: {
              type: 'category',
              tickPlacement: 'on',
              categories: [],
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              crosshairs: {
                stroke: {
                  dashArray: 0,
                },
              },
              tooltip: {
                enabled: false,
              },
              labels: {
                show: false,
              },
            },
            yaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
            },
            tooltip: {
              marker: {
                show: false,
              },
              x: {
                show: false,
              },
              fixed: {
                enabled: true,
                position: 'topRight',
              },
              y: {
                formatter: (value: number, { dataPointIndex }) => {
                  onHover(dataPointIndex);

                  const formatted = new Intl.NumberFormat().format(
                    units === 'metric' ? convertFeetToMeters(value) : value,
                  );

                  return `${formatted} ${units === 'metric' ? 'm' : 'ft'}`;
                },
              },
            },
          }}
          series={[
            {
              name: '',
              data: elevation,
            },
          ]}
          type="area"
          height="100%"
        />
        <div className={styles.grid1} />
        <div className={styles.grid2} />
        <div className={styles.grid3} />
        <div className={styles.grid4} />
        <div className={styles.grid5} />
      </div>
    </section>
  );
}

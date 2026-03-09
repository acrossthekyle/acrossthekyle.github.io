'use client';

import dynamic from 'next/dynamic';

import { useTheme } from '@/hooks/useTheme';
import { useUnits } from '@/hooks/useUnits';
import type { Gpx, Stat } from '@/types';
import { convertFeetToMeters } from '@/utils';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
  stats: Stat[];
};

export default function Elevation({ gpx, stats }: Props) {
  const { theme } = useTheme();
  const { units } = useUnits();

  if (gpx.length === 0) {
    return null;
  }

  const stat = stats.find((stat) => stat.label.toLowerCase() === 'distance');

  const distance = stat ? Number(stat.value.complex[units as keyof typeof stat.value.complex]) : 0;

  return (
    <section
      aria-label="gpx elevation profile"
      className={styles.container}
      id="gpx"
    >
      <div className={styles.chart}>
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
              colors: [theme === 'light' ? '#1b1b1b' : '#faf9f5'],
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
                formatter: (value: number) => {
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
              data: gpx.map(coordinate => coordinate[2]),
            },
          ]}
          type="area"
          height="100%"
        />
      </div>
      <div className={styles.grid1} />
      <div className={styles.grid2} />
      <div className={styles.grid3} />
      <div className={styles.grid4} />
      <div className={styles.grid5} />
      {distance && (
        <div
          className={styles.ticks}
          role="presentation"
          style={{
            gridTemplateColumns: `repeat(${distance}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: distance }, (_, index) => (
            <span className={styles.tick} key={index} />
          ))}
        </div>
      )}
    </section>
  );
}

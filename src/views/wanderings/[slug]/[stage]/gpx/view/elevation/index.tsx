'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { useTheme } from '@/hooks/useTheme';
import type { Gpx } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
};

export default function Elevation({ gpx }: Props) {
  const { theme } = useTheme();

  const { onHover } = useContext(GpxContext);

  const handleMouseLeave = () => {
    onHover(null);
  };

  if (gpx.length === 0) {
    return null;
  }

  return (
    <div className={styles.section} onMouseLeave={handleMouseLeave}>
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
            colors: [theme === 'light' ? '#1b1b1b' : '#faf9f5'],
            curve: 'smooth',
            width: 1,
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
            custom: function({ series, seriesIndex, dataPointIndex }) {
              return '<div>' +
                '<span>' + new Intl.NumberFormat().format(series[seriesIndex][dataPointIndex]) + ' ft</span>' +
              '</div>';
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

                return `${new Intl.NumberFormat().format(value)} ft`;
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
  );
}

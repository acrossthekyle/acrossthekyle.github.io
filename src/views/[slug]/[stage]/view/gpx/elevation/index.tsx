'use client';

import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';

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
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { onHover } = useContext(GpxContext);

  useEffect(() => {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') || 'light';
    }

    setIsDarkMode(theme !== 'light');
  }, [gpx]);

  const handleMouseLeave = () => {
    onHover(null);
  };

  if (gpx.length === 0) {
    return null;
  }

  return (
    <>
      <h4 className={styles.title}>Elevation</h4>
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
              colors: [isDarkMode ? '#ffffff' : '#000000'],
            },
            stroke: {
              colors: [isDarkMode ? '#ffffff' : '#000000'],
              curve: 'smooth',
              width: 1,
            },
            grid: {
              show: true,
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
    </>
  );
}

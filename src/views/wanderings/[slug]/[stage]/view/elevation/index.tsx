'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  elevation: string[] | null;
};

export default function Elevation({ elevation }: Props) {
  const { onHover } = useContext(GpxContext);

  const handleMouseLeave = () => {
    onHover(null);
  };

  if (elevation === null) {
    return null;
  }

  return (
    <div className={styles.section} onMouseLeave={handleMouseLeave}>
      <Chart
        options={{
          chart: {
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
          colors: ['#ffffffaa'],
          stroke: {
            curve: 'smooth',
            width: 3,
          },
          grid: {
            show: true,
            borderColor: '#ffffff1a',
            strokeDashArray: 6,
            padding: {
              top: 0,
              right: 26,
              bottom: 0,
              left: 30,
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
              show: true,
            },
            labels: {
              offsetX: 8,
              align: 'left',
              style: {
                colors: '#ffffffdb',
                fontWeight: 400,
              },
              formatter: (value: number) => `${new Intl.NumberFormat().format(value)} ft`,
              show: true,
            },
          },
          tooltip: {
            marker: {
              show: false,
            },
            theme: 'dark',
            x: {
              show: false,
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
            data: elevation.map((value) => Number(value)),
          },
        ]}
        type="line"
        height="100%"
      />
    </div>
  );
}

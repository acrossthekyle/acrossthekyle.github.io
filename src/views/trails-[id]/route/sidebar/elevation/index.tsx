'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { useUnits } from '@/hooks/useUnits';
import { convertFeetToMeters } from '@/utils';

import { GpxContext } from '../../context';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  elevation: number[];
};

export default function Elevation({ elevation }: Props) {
  const { current, labels } = useUnits();

  const { onElevationHover } = useContext(GpxContext);

  const handleMouseLeave = () => {
    onElevationHover(null);
  };

  if (elevation.length === 0) {
    return null;
  }

  return (
    <div className={styles.container} onMouseLeave={handleMouseLeave}>
      <Chart
        key={current}
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
            colors: ['var(--background)'],
          },
          stroke: {
            colors: ['transparent'],
            curve: 'smooth',
            width: 0,
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
              position: 'topLeft',
            },
            y: {
              formatter: (value: number, { dataPointIndex }) => {
                onElevationHover(dataPointIndex);

                const formatted = new Intl.NumberFormat().format(
                  current === 'metric' ? convertFeetToMeters(value) : value,
                );

                return `${formatted} ${labels.length.micro}`;
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
    </div>
  );
}

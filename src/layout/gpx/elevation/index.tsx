'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';

import { useGpx } from '@/hooks/useGpx';
import type { Gpx } from '@/types';

import { GpxContext } from '../context';

import styles from './stylesheet';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Props = {
  gpx: Gpx;
  shouldGrow: boolean;
};

export default function Elevation({ gpx, shouldGrow }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { onHover } = useContext(GpxContext);

  const { stats, toggleElevation } = useGpx();

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
    <div className={styles.section(shouldGrow)} onMouseLeave={handleMouseLeave}>
      <div className={styles.close}>
        <button
          className={styles.handle}
          onClick={toggleElevation}
          title="Minimize elevation"
          type="button"
        >
          <span className={styles.bar} />
        </button>
      </div>
      <span className={styles.title}>
        Elevation
        <span className={styles.change}>
          {stats.gain && (
            <span className={styles.inline}>
              <ChevronUp className={styles.arrow} />
              {stats.gain.value.imperial} {stats.gain.units.imperial.abbreviated}
            </span>
          )}
          {stats.loss && (
            <span className={styles.inline}>
              <ChevronDown className={styles.arrow} />
              {stats.loss.value.imperial} {stats.loss.units.imperial.abbreviated}
            </span>
          )}
        </span>
      </span>
      {stats.distance && (
        <div className={styles.ticks}>
          {Array.from({ length: Number(stats.distance.value.imperial) + 1 }, (_, index) => (
            <div className={styles.tick} key={index} />
          ))}
        </div>
      )}
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
            colors: [isDarkMode ? '#000000' : '#ffffff'],
          },
          stroke: {
            colors: [isDarkMode ? '#000000aa' : '#ffffffaa'],
            curve: 'smooth',
            width: 1,
          },
          grid: {
            show: true,
            borderColor: 'transparent',
            padding: {
              top: 0,
              bottom: -22,
              right: 10,
              left: 0,
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
              position: 'topLeft',
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

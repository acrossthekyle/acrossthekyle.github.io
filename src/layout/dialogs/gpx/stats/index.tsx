'use client';

import { useState } from 'react';

import type { Gpx, Stats, Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  gpx?: Gpx;
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ gpx, stats, termini }: Props) {
  const [canRenderStats, setCanRenderStats] = useState(false);

  const sections: Section[] = [
    {
      heading: 'Start',
      value: termini.start.words.join(' '),
    },
    {
      heading: 'End',
      value: termini.end.words.join(' '),
    },
  ];

  if (stats.time) {
    sections.push({
      heading: 'Time',
      value: `${stats.time.value} ${stats.time.units}`,
    });
  }

  if (stats.distance) {
    sections.push({
      heading: 'Length',
      value: `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`,
    });
  }

  if (gpx !== undefined) {
    if (gpx.length > 0) {
      sections.push({
        heading: 'Elevation Start',
        value: `${new Intl.NumberFormat().format(gpx[0][2])} ft`,
      });
    }

    if (gpx.length > 0) {
      sections.push({
        heading: 'Elevation End',
        value: `${new Intl.NumberFormat().format(gpx[gpx.length - 1][2])} ft`,
      });
    }
  }

  if (stats.max) {
    sections.push({
      heading: 'Max Elevation',
      value: `${stats.max.value.imperial} ${stats.max.units.imperial.abbreviated}`,
    });
  }

  if (stats.gain) {
    sections.push({
      heading: 'Elevation Gain',
      value: `${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated}`,
    });
  }

  if (stats.loss) {
    sections.push({
      heading: 'Elevation Loss',
      value: `${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`,
    });
  }

  const handleOnView = () => {
    setCanRenderStats(previous => !previous);
  };

  return (
    <>
      <button
        aria-controls="statsContainer"
        className={styles.view}
        onClick={handleOnView}
        type="button"
      >
        {canRenderStats ? 'Hide' : 'View'} Metrics
      </button>
      <section
        aria-labelledby="stats"
        className={styles.container(canRenderStats)}
        id="statsContainer"
      >
        <h3 className={styles.title} id="stats">
          Stats
        </h3>
        <ul className={styles.list}>
          {sections.map((section: Section) => (
            <li className={styles.item} key={section.heading}>
              <h3 className={styles.heading}>{section.heading}</h3>
              <p>{section.value}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

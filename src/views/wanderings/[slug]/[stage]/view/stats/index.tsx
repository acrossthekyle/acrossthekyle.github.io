'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import FocusLock from 'react-focus-lock';

import type { Stats, Termini } from '@/types';

import Gpx from './context';
import Elevation from './elevation';
import Route from './route';
import styles from './stylesheet';

type Props = {
  elevation: string[] | null;
  route: number[][] | null;
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ elevation, route, stats, termini }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGpxToggle = () => {
    setIsOpen((previousState) => !previousState);
  };

  const sections: Section[] = [];

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

  if (stats.max) {
    sections.push({
      heading: 'Max Altitude',
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

  return (
    <>
      <ul className={styles.list}>
        {sections.map((section: Section) => (
          <li className={styles.item} key={section.heading}>
            <h3 className={styles.heading}>{section.heading}</h3>
            <p>{section.value}</p>
          </li>
        ))}
        <li className={styles.item}>
          <button
            className={styles.view}
            onClick={handleGpxToggle}
            type="button"
          >
            View GPX
          </button>
        </li>
      </ul>
      <div
        aria-modal="true"
        className={styles.gpx(isOpen)}
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className="h-full">
          <button
            className={styles.close}
            onClick={handleGpxToggle}
            type="button"
          >
            <X />
          </button>
          <Gpx>
            <Route route={route} termini={termini} />
            <Elevation elevation={elevation} />
          </Gpx>
        </FocusLock>
      </div>
    </>
  );
}

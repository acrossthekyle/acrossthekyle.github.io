'use client';

import { Image as ImageIcon, LocateFixed, Plus } from 'lucide-react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';

import type { Stage } from '@/types';

import { useModel } from './timeline.card.model';
import styles from './timeline.stylesheet';

type Props = {
  activeIndex: number;
  onClick: (index: number) => void;
  stage: Stage;
  type: string;
};

export default function Card({ activeIndex, onClick, stage, type }: Props) {
  const { handleOnInView, hasEnteredView } = useModel();

  const isActive = activeIndex === stage.index;

  return (
    <InView onChange={handleOnInView} threshold={0.25}>
      {({ ref }) => (
        <li className={styles.step(hasEnteredView)} ref={ref}>
          <button
            className={styles.cta(isActive)}
            onClick={() => onClick(stage.index)}
            type="button"
          >
            <Plus className={styles.plus(isActive)} />
            <span aria-hidden="true" className={styles.index}>
              {String(stage.index + 1).padStart(2, '0')}
            </span>
            {stage.termini.end}
          </button>
          <p className={styles.date}>
            {stage.date}
          </p>
          <div className={styles.details(isActive)}>
            <div className={styles.inner(isActive)}>
              <figure className={styles.figure}>
                <Image
                  alt=""
                  className={styles.preview}
                  height="1080"
                  src={stage.images.hero}
                  width="1920"
                />
              </figure>
              <div className={styles.views}>
                <button
                  className={styles.view}
                  onClick={() => {}}
                  type="button"
                >
                  Image
                </button>
                <button
                  className={styles.view}
                  onClick={() => {}}
                  type="button"
                >
                  Map
                </button>
              </div>
              {stage.hasStats && (
                <ul className={styles.stats}>
                  <li className={styles.stat}>
                    <h5 className={styles.label}>Time</h5>
                    <p>
                      <span className={styles.value}>
                        {stage.stats.time.value}
                      </span>
                      <span className={styles.units}>
                        {stage.stats.time.units}
                      </span>
                    </p>
                  </li>
                  <li>
                    <h5 className={styles.label}>Distance</h5>
                    <p>
                      <span className={styles.value}>
                        {stage.stats.distance.value.imperial}
                      </span>
                      <span className={styles.units}>
                        {stage.stats.distance.units.imperial.full}
                      </span>
                    </p>
                  </li>
                  <li>
                    <h5 className={styles.label}>Peak</h5>
                    <p>
                      <span className={styles.value}>
                        {stage.stats.max.value.imperial}
                      </span>
                      <span className={styles.units}>
                        {stage.stats.max.units.imperial.full}
                      </span>
                    </p>
                  </li>
                  <li className={styles.stat}>
                    <h5 className={styles.label}>Elevation Gain/Loss</h5>
                    <p>
                      <span className={styles.value}>
                        {stage.stats.gain.value.imperial}
                      </span>
                      <span className={styles.units}>
                        {stage.stats.gain.units.imperial.abbreviated}
                      </span>
                      {' '}/{' '}
                      <span className={styles.value}>
                        {stage.stats.loss.value.imperial}
                      </span>
                      <span className={styles.units}>
                        {stage.stats.loss.units.imperial.abbreviated}
                      </span>
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </li>
      )}
    </InView>
  );
}

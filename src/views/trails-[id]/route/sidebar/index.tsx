'use client';

import { ArrowDown } from 'lucide-react';
import { useContext } from 'react';

import { Map, MapMarker } from '@/ui/map';
import { Length } from '@/ui/units';
import { padIndex } from '@/utils';

import type { Trail } from '../../types';
import { GpxContext } from '../context';

import Elevation from './elevation';
import styles from './stylesheet';

type Props = {
  trail: Trail;
};

export default function Sidebar({ trail }: Props) {
  const { onStageHover } = useContext(GpxContext);

  const total = trail.stages.length;

  const handleOnExplore = () => {
    document?.getElementById('stage-01')?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  return (
    <aside className={styles.container}>
      <ul className={styles.items} id="stages">
        <li className={styles.item}>
          <div className={styles.card}>
            <span className={styles.helper}>
              Scroll up/down
            </span>
            <Map className={styles.map}>
              <MapMarker invert position={{
                left: trail.position[1],
                top: trail.position[0],
              }} />
            </Map>
            <ul className={styles.stats}>
              <li className={styles.stat}>
                <span>Distance</span>
                <span>
                  <Length value={trail.distance.value.complex} />
                </span>
              </li>
              <li className={styles.stat}>
                <span>Duration</span>
                <span>
                  {trail.duration}
                </span>
              </li>
              <li className={styles.stat}>
                <span>Highest point</span>
                <span>
                  <Length isSmall value={trail.altitudeMax.value.complex} />
                </span>
              </li>
              <li className={styles.stat}>
                <span>Elev. Gain</span>
                <span>
                  <Length isSmall value={trail.elevationGain.value.complex} />
                </span>
              </li>
              <li className={styles.stat}>
                <span>Elev. Loss</span>
                <span>
                  <Length isSmall value={trail.elevationLoss.value.complex} />
                </span>
              </li>
            </ul>
            <div className={styles.more}>
              <button
                className={styles.explore}
                onClick={handleOnExplore}
                type="button"
              >
                <ArrowDown className={styles.down} />
                <span>Explore</span>
                <ArrowDown className={styles.down} />
              </button>
            </div>
          </div>
        </li>
        {trail.stages.map((stage, index: number) => (
          <li
            className={styles.item}
            id={index === 0 ? 'stage-01' : undefined}
            key={stage.coordinates}
            onMouseEnter={() => onStageHover(index)}
            onMouseLeave={() => onStageHover(null)}
          >
            <section className={styles.card}>
              <h3 className={styles.termini}>
                {stage.termini}
                <span className={styles.index}>
                  [00-{padIndex(index + 1)}-{total}]
                </span>
              </h3>
              <ul className={styles.stats}>
                <li className={styles.stat}>
                  <span>When</span>
                  <span>
                    {stage.when}
                  </span>
                </li>
                <li className={styles.stat}>
                  <span>Where</span>
                  <span>
                    {stage.location}
                  </span>
                </li>
                {trail.type !== 'summit' && (
                  <>
                    <li className={styles.stat}>
                      <span>Distance</span>
                      <span>
                        <Length value={stage.distance.value.complex} />
                      </span>
                    </li>
                    <li className={styles.stat}>
                      <span>Duration</span>
                      <span>
                        {stage.hours.value.basic}
                      </span>
                    </li>
                    <li className={styles.stat}>
                      <span>Highest point</span>
                      <span>
                        <Length isSmall value={stage.altitudeMax.value.complex} />
                      </span>
                    </li>
                    <li className={styles.stat}>
                      <span>Elev. Gain</span>
                      <span>
                        <Length isSmall value={stage.elevationGain.value.complex} />
                      </span>
                    </li>
                    <li className={styles.stat}>
                      <span>Elev. Loss</span>
                      <span>
                        <Length isSmall value={stage.elevationLoss.value.complex} />
                      </span>
                    </li>
                  </>
                )}
              </ul>
              <Elevation elevation={stage.elevation} />
            </section>
          </li>
        ))}
        <li className={styles.item} />
        <li className={styles.spacer} role="presentation" />
      </ul>
    </aside>
  );
}

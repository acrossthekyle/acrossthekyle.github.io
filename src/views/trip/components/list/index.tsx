import { Star, X } from 'lucide-react';

import { useView } from '@/hooks/useView';
import { type Trip, Overlay } from '@/types';

import Components from '../components';

import styles from './stylesheet';

type Props = {
  active: number;
  onChange: (index: number) => void;
  trip: Trip;
};

export default function List({ active, onChange, trip }: Props) {
  const { overlay } = useView();

  return (
    <Components.Panel isActive={overlay === Overlay.List}>
      <h3 className={styles.header}>
        Itinerary
      </h3>
      <ul className={styles.container}>
        {trip.stages.map(({ date, title }, index: number) => (
          <li className={styles.item} key={title}>
            <div className={`${styles.circle} ${active >= index ? styles.filled : ''}`.trim()}>
              {active !== index && index === trip.length - 1 && (
                <X className={styles.terminus} />
              )}
              {active === index && <Star className={styles.icon} />}
            </div>
            <button
              className={styles.cta}
              onClick={() => onChange(index)}
              type="button"
            >
              <div>
                <p className={styles.step}>
                  {date}
                </p>
                <h4 className={styles.title}>
                  {title.replace(/ to /g, '\u00A0\u2192\u00A0')}
                </h4>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Components.Panel>
  );
}

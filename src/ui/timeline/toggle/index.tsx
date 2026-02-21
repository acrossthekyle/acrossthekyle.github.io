'use client';

import { Minus, Plus } from 'lucide-react';
import { useContext, useEffect } from 'react';

import { TimelineContext } from '../context';

import styles from './stylesheet';

export default function Toggle() {
  const { isToggled, onToggle, truncate } = useContext(TimelineContext);

  useEffect(() => {
    truncate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      aria-describedby="timeline"
      className={styles.cta}
      onClick={onToggle}
      title={isToggled ? 'View less' : 'View all'}
      type="button"
    >
      <span className={styles.dot}/>
      {isToggled ? (
        <Minus className={styles.icon} />
      ) : (
        <Plus className={styles.icon} />
      )}
    </button>
  );
}

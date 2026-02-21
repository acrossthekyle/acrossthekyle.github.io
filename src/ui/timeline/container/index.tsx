'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isPreview?: boolean;
};

export default function Container({ children, isPreview }: Props) {
  const [canShowAll, setCanShowAll] = useState(isPreview ? false : true);

  const handleOnViewMore = () => {
    setCanShowAll(previous => !previous);
  };

  return (
    <>
      <ol aria-label="timeline" className={styles.list(canShowAll)}>
        {children}
      </ol>
      {isPreview && (
        <button
          className={styles.cta}
          onClick={handleOnViewMore}
          title={canShowAll ? 'View all' : 'Reset'}
          type="button"
        >
          <span className={styles.dot}/>
          {canShowAll ? (
            <Minus className={styles.icon} />
          ) : (
            <Plus className={styles.icon} />
          )}
        </button>
      )}
    </>
  );
}

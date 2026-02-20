'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isPreview?: boolean;
};

export default function Container({ children, isPreview }: Props) {
  const [canShowAll, setCanShowAll] = useState(isPreview ? false : true);

  const handleOnViewMore = () => {
    setCanShowAll(true);
  };

  return (
    <>
      <ol aria-label="timeline" className={styles.list(canShowAll)}>
        {children}
      </ol>
      {!canShowAll && (
        <button
          className={styles.cta}
          onClick={handleOnViewMore}
          title="View all"
          type="button"
        >
          <span className={styles.dot}/>
          <Plus className={styles.icon} />
        </button>
      )}
    </>
  );
}

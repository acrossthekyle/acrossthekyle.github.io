import { ChevronDown } from 'lucide-react';

import type { Travel } from '@/types';

import styles from './stylesheet';

type Props = {
  onViewMore: () => void;
  shown: number;
  travel: Travel;
};

export default function Footer({ onViewMore, shown, travel }: Props) {
  const remaining = Number(travel.stats.length.value) - shown;

  return (
    <>
      {shown < Number(travel.stats.length.value) && (
        <button
          className={styles.more}
          onClick={onViewMore}
          type="button"
        >
          <span className={styles.shown}>
            {shown}/{travel.stats.length.value} shown
          </span>
          {remaining > 6 ? 'Next' : 'Last'}{' '}
          {remaining < 6 ? (remaining === 1 ? '' : remaining) : 6}{' '}
          {travel.label}{remaining > 1 ? 's' : ''}
          <ChevronDown />
        </button>
      )}
    </>
  );
}

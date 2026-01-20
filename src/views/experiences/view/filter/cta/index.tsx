'use client';

import { Badge } from '@/ui/badge';

import styles from './stylesheet';

type Props = {
  count?: number;
  current: string;
  expected: string;
  label?: string;
  onClick: (expected: string) => void;
};

export default function Cta({
  count,
  current,
  expected,
  label,
  onClick,
}: Props) {
  return (
    <button
      className={styles.button}
      onClick={() => onClick(expected)}
      type="button"
    >
      <strong className={styles.value}>
        {expected}{count && (
          <>
            {expected !== 'everything' && count > 1 ? 's' : ''}
          </>
        )}
      </strong>
      {count && (
        <small className={styles.label}>
          {count} item{count > 1 ? 's' : ''}
        </small>
      )}
      {label && (
        <small className={styles.label}>
          {label}
        </small>
      )}
      {expected === current && (
        <>
          {' '}<Badge>selected</Badge>
        </>
      )}
    </button>
  );
}

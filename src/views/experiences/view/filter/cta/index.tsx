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
            {count > 1 ? 's' : ''}
          </>
        )}
      </strong>
      {count && (
        <Badge>{count} items</Badge>
      )}
      {label && (
        <Badge>{label}</Badge>
      )}
      {expected === current && (
        <>
          {' '}<Badge>current</Badge>
        </>
      )}
    </button>
  );
}

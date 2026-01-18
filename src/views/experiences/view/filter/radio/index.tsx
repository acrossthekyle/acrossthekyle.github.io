'use client';

import styles from './stylesheet';

type Props = {
  count?: number;
  current: string;
  expected: string;
  onChange: (expected: string) => void;
  text: string;
};

export default function Radio({
  count,
  current,
  expected,
  onChange,
  text,
}: Props) {
  return (
    <button
      className={styles.container}
      onClick={() => onChange(expected)}
      type="button"
    >
      <span aria-hidden="true" className={styles.dot(current === expected)} />
      <span className={styles.text}>
        {text}
        {count !== undefined && (
          <>
            {count > 1 && expected !== 'everything' ? 's' : ''}
          </>
        )}
      </span>
    </button>
  );
}

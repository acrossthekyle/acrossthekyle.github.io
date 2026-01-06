'use client';

import styles from './stylesheet';

type Props = {
  count?: number;
  current: string;
  expected: string;
  onChange: (expected: string) => void;
  text: string;
};

export default function Radio({ count, current, expected, onChange, text }: Props) {
  return (
    <label className={styles.container}>
      <input
        type="radio"
        checked={current === expected}
        onChange={() => onChange(expected)}
        className={styles.radio}
      />
      <span className={styles.dot} />
      <span className={styles.text}>
        {text}
        {count !== undefined && (
          <>
            {count > 1 ? 's' : ''}
            <span className={styles.count}>[{count}]</span>
          </>
        )}
      </span>
    </label>
  );
}

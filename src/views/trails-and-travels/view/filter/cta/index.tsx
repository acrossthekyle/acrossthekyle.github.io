'use client';

import styles from './stylesheet';

type Props = {
  count?: string | number;
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
      className={styles.button(expected === current)}
      onClick={() => onClick(expected)}
      type="button"
    >
      <span>
        {!!label ? <>{label}</> : (
          <>{expected}</>
        )}
      </span>
      {count && (
        <span className={styles.count}>
          {count}
        </span>
      )}
    </button>
  );
}

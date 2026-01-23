'use client';

import { useTheme } from '@/hooks/useTheme';

import styles from './stylesheet';

type Props = {
  className: string;
};

export default function Theme({ className }: Props) {
  const { onToggleTheme } = useTheme();

  return (
    <button
      className={className}
      onClick={onToggleTheme}
      title="Toggle theme"
      type="button"
    >
      <span aria-hidden="true" className={styles.dot} />
    </button>
  );
}

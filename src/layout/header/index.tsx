'use client';

import { usePathname } from 'next/navigation';

import { useMenu } from '@/hooks/useMenu';
import { getRoute } from '@/utils';

import { styles } from './stylesheet';

type Props = {
  className?: string;
};

export default function Header({ className = '' }: Props) {
  const { onMenu } = useMenu();

  const pathname = usePathname();

  const current = getRoute(pathname);

  return (
    <header className={`${styles.container} ${className}`.trim()}>
      <button
        aria-label="open menu"
        className={styles.anchor}
        onClick={onMenu}
        type="button"
      >
        <span className={styles.top} />
        <span className={styles.bottom} />
      </button>
      <h1 className={styles.header}>{current.name} <span className={styles.dash} /> {current.text}</h1>
    </header>
  );
}

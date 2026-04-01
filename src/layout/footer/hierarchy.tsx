'use client';

import Link from 'next/link';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Hierarchy() {
  const { current, previous } = useHierarchy();

  const handleOnJump = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (current === '/') {
    return null;
  }

  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href={current}
        >
          Current
          <span className={styles.text}>.com{current}</span>
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          className={styles.link}
          href={previous}
        >
          Previous
          <span className={styles.text}>.com{previous}</span>
        </Link>
      </li>
      <li className={styles.item}>
        <button className={styles.link} onClick={handleOnJump} type="button">
          Jump to
          <span className={styles.text}>TOP</span>
        </button>
      </li>
    </ul>
  );
}

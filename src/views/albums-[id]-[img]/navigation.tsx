'use client';

import { SquareChevronLeft, SquareChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import styles from './stylesheet';

type Props = {
  direction: number;
  path: string;
  text: string;
};

export default function Navigation({ direction, path, text }: Props) {
  const router = useRouter();

  const handleOnClick = () => {
    router.replace(path);
  };

  return (
    <button
      className={`${styles.link} ${direction > 0 ? styles.end : ''}`.trim()}
      onClick={handleOnClick}
      type="button"
    >
      {direction < 0 && (
        <>
          <SquareChevronLeft className={styles.kbd} />{' '}
        </>
      )}
      {text}
      {direction > 0 && (
        <>
          {' '}<SquareChevronRight className={styles.kbd} />
        </>
      )}
    </button>
  );
}

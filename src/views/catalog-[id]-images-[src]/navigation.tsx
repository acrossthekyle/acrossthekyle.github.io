'use client';

import { MoveLeft, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import type { Data } from '@/types';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  all: Data[];
  current: number;
  id: string;
  total: number;
};

export default function Navigation({
  all,
  current,
  id,
  total,
}: Props) {
  const router = useRouter();

  const handleOnNavigate = (direction: number) => {
    const url = [`/index/${id}/images/`];

    if (direction < 0) {
      if (current === 0) {
        url.push(all[total - 1]?.src?.split('/').pop() || '');
      } else {
        url.push(all[current - 1]?.src?.split('/').pop() || '');
      }
    } else {
      if (current === (total - 1)) {
        url.push(all[0]?.src?.split('/').pop() || '');
      } else {
        url.push(all[current + 1]?.src?.split('/').pop() || '');
      }
    }

    router.replace(
      url.join(''),
      {
        scroll: false
      },
    );
  };

  return (
    <nav aria-label="supplementary navigation" className={styles.navigation}>
      <button
        className={styles.navigate}
        onClick={() => handleOnNavigate(-1)}
        type="button"
      >
        <MoveLeft className={styles.arrow} /> {current === 0 ? 'last' : 'Prev'}
      </button>
      <span className={styles.total}>
          Image {padIndex(current + 1)} / {padIndex(total)}
        </span>
      <button
        className={styles.navigate}
        onClick={() => handleOnNavigate(1)}
        type="button"
      >
        {current === (total - 1) ? 'First' : 'Next'} <MoveRight className={styles.arrow} />
      </button>
    </nav>
  );
}

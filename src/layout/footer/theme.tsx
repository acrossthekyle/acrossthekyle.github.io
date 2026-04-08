'use client';

import { setTheme } from '@/app/actions';

import styles from './stylesheet';

type Props = {
  current: string;
};

export default function Theme({ current }: Props) {
  const handleOnClick = () => {
    let value = '';

    if (current === 'auto') {
      value = 'light';
    } else if (current === 'light') {
      value = 'dark';
    } else if (current === 'dark') {
      value = 'auto';
    }

    setTheme(value);
  };

  return (
    <button className={styles.button} onClick={handleOnClick} type="button">
      <span className={styles.highlight}>
        {current === 'auto' && 'AUTO '}
        {current === 'light' && 'LIGHT '}
        {current === 'dark' && 'DARK '}
      </span>
      [Mode]
    </button>
  );
}

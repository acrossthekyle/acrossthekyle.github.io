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
    <button className={styles.link} onClick={handleOnClick} type="button">
      Lights
      <span className={styles.text}>
        {current === 'auto' && 'AUTO'}
        {current === 'light' && 'ON'}
        {current === 'dark' && 'OFF'}
      </span>
    </button>
  );
}

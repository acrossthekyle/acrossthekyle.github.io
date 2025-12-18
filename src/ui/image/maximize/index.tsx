'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Maximize() {
  const { handleOnClick } = useModel();

  return (
    <button
      className={styles.maximize}
      onClick={handleOnClick}
      type="button"
    />
  );
}

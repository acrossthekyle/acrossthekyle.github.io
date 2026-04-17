'use client';

import styles from './stylesheet';

export default function Jump() {
  const handleOnJump = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={styles.button} onClick={handleOnJump} type="button">
      Jump [Up]
    </button>
  );
}

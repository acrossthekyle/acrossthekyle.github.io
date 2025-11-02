'use client';

import styles from './stylesheet';

export default function Footer() {
  const handleOnScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const element = document.getElementById('dialog');

    if (element) {
      element.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <button
        className={styles.up}
        onClick={handleOnScrollToTop}
        type="button"
      >
        Back to top
      </button>
    </footer>
  );
}

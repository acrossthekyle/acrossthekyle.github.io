'use client';

import styles from './stylesheet';

export default function Up() {
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const anchor = document.getElementById('anchor');
    const dialog = document.getElementById('dialog');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }

    if (dialog) {
      dialog.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      aria-label="scroll to top of document"
      className={styles.cta}
      onClick={handleOnClick}
      type="button"
    >
      Back to top
    </button>
  );
}

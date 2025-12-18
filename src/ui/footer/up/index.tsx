'use client';

import { useEffect } from 'react';

import styles from './stylesheet';

const keysPressed: { [key: string]: boolean } = {};

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

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      delete keysPressed[event.key];
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressed[event.key] = true;

      if (
        event.key === 'ArrowUp' &&
        (keysPressed['Meta'] || keysPressed['Ctrl'])
      ) {
        event.preventDefault();

        handleOnClick();
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

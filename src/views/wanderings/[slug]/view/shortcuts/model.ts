'use client';

import { useEffect } from 'react';

const keysPressed: { [key: string]: boolean } = {};

export const useModel = () => {
  const handleOnClick = () => {
    const element = document.getElementById('overview');

    if (element) {
      element.scrollIntoView({
        block: 'start',
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
        event.key === 'ArrowDown' &&
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

  return {
    handleOnClick,
  };
};

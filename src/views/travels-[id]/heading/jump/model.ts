import { ChangeEvent } from 'react';

export function useModel() {
  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value.toLowerCase();

    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return {
    handleOnSelect,
  }
};

import { ChangeEvent } from 'react';

export function useModel(onChange: (value: string) => void) {
  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value.toLowerCase());
  };

  return {
    handleOnSelect,
  }
};

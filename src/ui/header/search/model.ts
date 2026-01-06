'use client';

import { ChangeEvent } from 'react';

export function useModel(
  onChange: (searchBy: string) => void,
) {
  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = (event.target as HTMLInputElement).value.toLowerCase();

    onChange(term);
  };

  return {
    handleOnSearch,
  };
};

'use client';

import { kebabCase } from 'lodash';
import { ChangeEvent, useId } from 'react';

type Return = {
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  uuid: string;
};

export const useViewModel = (
  label: string = '',
  onChange: (index: number) => void,
): Return => {
  const uuid = useId();

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selection = (event.target as HTMLSelectElement).value;

    onChange(Number(selection));
  };

  return {
    handleOnChange,
    name: kebabCase(label.toLowerCase()),
    uuid,
  };
};

export default function Node() {
  return null;
}

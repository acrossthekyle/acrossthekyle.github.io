'use client';

import { ChangeEvent } from 'react';

import type { Image } from '@/types';

import { useNavigation } from '../../hooks';

import { styles } from './stylesheet';

type Props = {
  all: Image[];
  current: number;
  id: string;
  onNavigate: (index: number) => void;
  total: number;
};

export default function Range(props: Props) {
  const { onRange } = useNavigation(props);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onRange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      min="0"
      max={props.total - 1}
      step="1"
      value={props.current}
      onChange={handleOnChange}
      aria-label="navigate images"
      className={styles.container}
    />
  );
}

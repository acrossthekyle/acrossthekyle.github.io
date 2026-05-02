'use client';

import { useSize } from '@/hooks/useSize';

import Image from '../../image';

import styles from './stylesheet';
import Toggle from './toggle';

type Props = {
  src?: string;
};

export default function Picture({ src }: Props) {
  const { size } = useSize();

  if (src === undefined) {
    return null;
  }

  return (
    <>
      <Image
        className={styles.image(size)}
        priority
        size="large"
        src={src}
      />
      <Toggle />
    </>
  );
}

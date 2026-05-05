'use client';

import { useSize } from '@/hooks/useSize';
import { Ui } from '@/ui';

import styles from './stylesheet';
import Toggle from './toggle';

type Props = {
  src?: string;
  thumb?: string;
};

export default function Picture({ src, thumb }: Props) {
  const { size } = useSize();

  if (src === undefined || thumb === undefined) {
    return null;
  }

  return (
    <>
      <Ui.Image
        className={styles.image(size)}
        priority
        size="large"
        src={src}
        thumb={thumb}
      />
      <Toggle />
    </>
  );
}

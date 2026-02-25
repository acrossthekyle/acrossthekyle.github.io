'use client';

import Context from '../context';
import Image from '../image';
import Skeleton from '../skeleton';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  size?: string;
  src: string;
}

export default function Container({ children, size, src }: Props) {
  return (
    <Context src={src}>
      <Image
        alt=""
        height={432}
        sizes={`(max-width: 768px) 32vw, ${size === 'large' ? '80vw' : '28vw'}`}
        src={src}
        width={768}
      />
      <Skeleton />
      <div className={styles.overlay} />
      {children}
    </Context>
  );
}

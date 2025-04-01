import { ReactNode } from 'react';

import styles from '@/styles/components/posts/hero.module.scss';

import Image from '../image/image';

type Props = {
  className?: string;
  image: string;
};

function Hero({ className = '', image }: Props) {
  return (
    <div className={`${styles.hero} ${className}`.trim()}>
      <Image alt="hero" height={1080} sizes="80vw" src={image} width={1920} />
    </div>
  );
}

export default Hero;

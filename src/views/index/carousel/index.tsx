'use client';

import { useState } from 'react';

import tw from '@/styles';

import { IMAGES } from './constants';
import Items from './items';
import Navigation from './navigation';

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section aria-label="image carousel" className={styles.container}>
      <Items current={current} />
      <Navigation
        current={current}
        onChange={setCurrent}
        total={IMAGES.length}
      />
    </section>
  );
};

const styles = tw({
  container: `
    relative z-0
    col-span-1 order-1

    sm:fixed
    sm:top-0
    sm:right-0
    sm:bottom-0
    sm:w-1/2
    lg:relative
    lg:top-auto
    lg:right-auto
    lg:bottom-auto
    lg:w-full
    lg:order-2
  `,
});

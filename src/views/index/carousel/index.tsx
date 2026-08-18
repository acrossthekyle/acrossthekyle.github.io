'use client';

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import tw from '@/styles';
import { Ui } from '@/ui';

import { IMAGES } from './constants';

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const handleSwipedLeft = () => {
    setCurrent((previous) => (previous === IMAGES.length - 1 ? 0 : previous + 1));
  };

  const handleSwipedRight = () => {
    setCurrent((previous) => (previous === 0 ? IMAGES.length - 1 : previous - 1));
  };

  const swipeable = useSwipeable({
    onSwipedLeft: () => handleSwipedLeft(),
    onSwipedRight: () => handleSwipedRight(),
    trackMouse: true,
  });

  return (
    <section
      aria-label="carousel"
      className={styles.container}
      {...swipeable}
    >
      <ul className={styles.items}>
        {IMAGES.map(({ collection, src, title, year }, index) => (
          <li key={src}>
            <figure className={styles.figure(current === index)}>
              <Ui.Image
                className={styles.image}
                src={src}
              />
              <figcaption className={styles.caption}>
                <span className={styles.title}>{title}</span>
                <span className={styles.collection}>{collection}</span>
                <span className={styles.year}>{year}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <nav
        aria-label="supplementary navigation"
        className={styles.navigation}
      >
        {IMAGES.map((_, index) => (
          <button
            className={styles.navigate}
            key={index}
            onClick={() => setCurrent(index)}
            type="button"
          >
            <span className={styles.pill(current === index)} />
          </button>
        ))}
      </nav>
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
  items: `
    relative
    h-[60svh] w-full

    sm:h-svh
  `,
  figure: (isActive: boolean) => tw(`
    absolute inset-0

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-1' : 'opacity-0 z-0'}
  `),
  image: `
    grayscale brightness-70

    dark:brightness-80
  `,
  caption: `
    absolute bottom-24 right-6 z-2
    flex flex-col gap-0.5 items-end
    uppercase
    leading-[1]
    text-tiny text-white

    sm:top-24
    sm:bottom-auto
    sm:text-xtiny
  `,
  title: `
    font-black
  `,
  collection: `
    italic
  `,
  year: `
    font-mono
  `,
  navigation: `
    absolute bottom-4 left-0 right-0 z-2
    flex justify-center
  `,
  navigate: `
    py-2 px-1
  `,
  pill: (isActive: boolean) => tw(`
    block
    h-1.25 w-5
    rounded-full
    border border-white/22.5

    ${isActive ? 'bg-white' : 'bg-black'}
  `),
});

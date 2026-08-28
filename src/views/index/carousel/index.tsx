'use client';

import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import tw from '@/styles';
import { Ui } from '@/ui';

import { AUTOPLAY_TIMER, IMAGES } from './constants';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [canAutoPlay, setCanAutoPlay] = useState(false);

  const handleNext = () => {
    setCanAutoPlay(false);

    setCurrent((previous) => (previous === IMAGES.length - 1 ? 0 : previous + 1));
  };

  const handlePrevious = () => {
    setCanAutoPlay(false);

    setCurrent((previous) => (previous === 0 ? IMAGES.length - 1 : previous - 1));
  };

  const handleClick = (index: number) => {
    setCanAutoPlay(false);

    setCurrent(index);
  };

  const handlePausePlay = () => {
    setCanAutoPlay(previous => !previous);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (canAutoPlay) {
        setCurrent((previous) => (previous === IMAGES.length - 1 ? 0 : previous + 1));
      }
    }, AUTOPLAY_TIMER);

    return () => clearInterval(timer);
  }, [canAutoPlay, setCurrent]);

  const swipeable = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    trackMouse: true,
  });

  return (
    <section
      aria-label="image carousel"
      className={styles.container}
      {...swipeable}
    >
      <ul className={styles.items}>
        {IMAGES.map(({ src, title, year }, index) => (
          <li key={src}>
            <figure className={styles.figure(current === index)}>
              <Ui.Image className={styles.image} size="large" src={src} />
              <figcaption className={styles.caption}>
                <span className={styles.title}>{title}</span>
                <span className={styles.year}>{year}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <nav aria-label="supplementary navigation">
        <button
          aria-hidden="true"
          className={styles.previous}
          onClick={handlePrevious}
          tabIndex={-1}
          type="button"
        />
        <button
          aria-label={`${canAutoPlay ? 'pause' : 'play'} image carousel`}
          className={styles.auto}
          onClick={handlePausePlay}
          type="button"
        >
          {canAutoPlay ? 'Pause' : 'Play'}
        </button>
        <ul className={styles.navigation}>
          {IMAGES.map((_, index) => (
            <li key={index}>
              <button
                aria-label={`jump to image ${index + 1}`}
                className={styles.navigate}
                onClick={() => handleClick(index)}
                type="button"
              >
                <span className={styles.pill(current === index)} />
              </button>
            </li>
          ))}
        </ul>
        <button
          aria-hidden="true"
          className={styles.next}
          onClick={handleNext}
          tabIndex={-1}
          type="button"
        />
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
    h-[80svh] w-full

    sm:h-full
  `,
  figure: (isActive: boolean) => tw(`
    absolute inset-0

    motion-safe:duration-300

    ${isActive ? 'opacity-100 z-1' : 'opacity-0 z-0'}
  `),
  image: `
    grayscale
    mask-t-from-80% mask-t-to-100%

    sm:mask-none
  `,
  caption: `
    absolute bottom-16 left-6 z-2
    flex flex-col
    text-xs text-white

    landscape-constrained:text-tiny

    sm:text-tiny
    sm:top-6
    sm:bottom-auto
  `,
  title: `
    uppercase
    font-black
  `,
  year: `
    opacity-75
  `,
  navigation: `
    absolute bottom-4 left-0 right-0 z-2
    flex justify-center
  `,
  navigate: `
    p-2
  `,
  next: `
    absolute top-0 right-0 bottom-0 z-1
    w-1/2
    outline-0
    !cursor-e-resize
  `,
  previous: `
    absolute top-0 left-0 bottom-0 z-1
    w-1/2
    outline-0
    !cursor-w-resize
  `,
  pill: (isActive: boolean) => tw(`
    block
    h-0.75 w-4
    rounded-full
    border border-white/22.5

    ${isActive ? 'bg-white' : 'bg-black'}
  `),
  auto: `
    absolute bottom-6 left-6 z-4
    px-3 py-2
    leading-[0.8]
    text-tiny
    uppercase
    tracking-wider
    bg-(--background)
    rounded-full

    motion-safe:duration-300

    hover:bg-(--background)/50

    sm:text-xtiny
  `,
  icon: `
    w-4 h-4
    fill-white
  `,
});

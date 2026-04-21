'use client';

import 'swiper/css';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Keyboard, Mousewheel } from 'swiper/modules';

import type { Album } from '@/types';

import { Image } from '../ui/image';

import styles from './stylesheet';

type Props = {
  data: Album[];
  onClick: (album: Album) => void;
};

const BREAKPOINTS = {
  0: {
    slidesPerView: 2.25,
  },
  768: {
    slidesPerView: 3.25,
  },
  1024: {
    slidesPerView: 4.25,
  },
  1470: {
    slidesPerView: 5.25,
  },
};

export default function Plugin({ data, onClick }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [inViewRef, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (swiperRef.current !== null) {
      const totalSlides = swiperRef.current.slides.length;

      const min = 8;
      const max = 12;

      const safeMax = Math.min(max, totalSlides - 1);
      const randomIndex = Math.floor(Math.random() * (safeMax - min + 1)) + min;

      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(randomIndex, 2000);
        }
      }, 2200);
    }
  }, []);

  const handleOnClick = (album: Album) => {
    // if (swiperRef.current && swiperRef.current.allowClick) {
      onClick(album);
    // }
  };

  const handleOnInitialization = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    setTimeout(() => {
      swiper.update();
    }, 50);
  };

  return (
    <div ref={inViewRef}>
      <Swiper
        className={styles.container(isInView)}
        modules={[A11y, FreeMode, Keyboard, Mousewheel]}
        a11y
        slidesPerView={BREAKPOINTS['0'].slidesPerView}
        keyboard
        grabCursor
        resistance={false}
        noSwiping={false}
        preventClicks
        preventClicksPropagation
        threshold={10}
        loop
        loopPreventsSliding={false}
        maxBackfaceHiddenSlides={10}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        mousewheel
        observer
        observeParents
        centeredSlides
        breakpoints={BREAKPOINTS}
        onSwiper={handleOnInitialization}
      >
        {data.map((item, index: number) => {
          const total = data.length;
          // Define the custom order: [second-to-last, last, 0, 1, 2, 3]
          const sequence = [total - 3, total - 2, total - 1, 0, 1, 2, 3, 4];
          // Find if the current index is part of our sequence
          const orderIndex = sequence.indexOf(index);
          // Apply delay only if the index is in our sequence, otherwise null
          const delay = orderIndex !== -1 ? `${orderIndex * 0.2}s` : '0s';

          return (
            <SwiperSlide
              className={styles.slide}
              key={item.id}
            >
              <button
                onClick={() => handleOnClick(item)}
                className={styles.cta(isInView)}
                style={{ transitionDelay: delay }}
                type="button"
              >
                <Image
                  className={styles.image}
                  src={item.images[0].src}
                />
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

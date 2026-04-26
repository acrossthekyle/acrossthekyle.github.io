'use client';

import 'swiper/css';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Keyboard, Mousewheel } from 'swiper/modules';

import type { Album } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data: Album[];
  onClick: (album: Album) => void;
};

const BREAKPOINTS = {
  640: {
    slidesPerView: 3,
  },
  1098: {
    slidesPerView: 5,
  },
};

export default function Plugin({ data, onClick }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const [inViewRef, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setTimeout(() => {
      if (swiperRef.current !== null) {
        const width = window.innerWidth;

        if (width >= 1098) {
          swiperRef.current.slideTo(11, 1250);
        } else if (width >= 640) {
          swiperRef.current.slideTo(7, 1250);
        } else {
          swiperRef.current.slideTo(5, 1250);
        }
      }
    }, 4200);
  }, []);

  const handleOnClick = (album: Album) => {
    // @ts-expect-error - property exists
    if (swiperRef.current && swiperRef.current.allowClick) {
      onClick(album);
    }
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
        slidesPerView={2}
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
          const sequence = [total - 3, total - 2, total - 1, 0, 1, 2, 3, 4];
          const orderIndex = sequence.indexOf(index);
          const delay = orderIndex !== -1 ? orderIndex * .2 : 0;

          return (
            <SwiperSlide
              className={styles.slide}
              key={item.id}
            >
              <button
                aria-label={`view ${item.title.toLowerCase()} album details`}
                className={styles.cta(isInView)}
                onClick={() => handleOnClick(item)}
                style={{ transitionDelay: `${delay === 0 ? '0s' : 2 + delay}s` }}
                type="button"
              >
                <Ui.Images.Image
                  className={styles.image}
                  src={item.cover}
                />
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

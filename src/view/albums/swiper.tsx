'use client';

import 'swiper/css';
import 'swiper/css/virtual';

import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode, Keyboard, Mousewheel, Virtual } from 'swiper/modules';

import { Image } from '../ui/image';
import type { Album } from '../types';

import styles from './stylesheet';

type Props = {
  data: Album[];
  onClick: (album: Album) => void;
};

export default function Plugin({ data, onClick }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleOnClick = (album: Album) => {
    if (swiperRef.current && swiperRef.current.allowClick) {
      onClick(album);
    }
  };

  return (
    <Swiper
      className={styles.container}
      modules={[A11y, FreeMode, Keyboard, Mousewheel]}
      a11y
      slidesPerView={1.5}
      keyboard
      centeredSlides
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
      breakpoints={{
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
        1470: {
          slidesPerView: 4.5,
        },
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;

        setTimeout(() => {
          swiper.update();
        }, 50);
      }}
    >
      {data.map((item, index: number) => (
        <SwiperSlide
          className={styles.slide}
          key={item.id}
        >
          <button
            onClick={() => handleOnClick(item)}
            className={styles.cta}
            type="button"
          >
            <Image
              className={styles.image}
              src={item.images[0].src}
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

'use client';

import { MoveLeft, MoveRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import tw from '@/styles';
import type { Collection, Image } from '@/types';
import { Ui } from '@/ui';
import { pad } from '@/utils';

type Props = {
  data: {
    collection: Collection;
    image: Image;
    index: number;
    next: string;
    previous: string;
    total: number;
  };
};

export default function View({ data }: Props) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.replace(`/travels/${data.collection.id}/img/${id}`);
  };

  const handleSwipedLeft = () => {
    handleClick(data.next);
  };

  const handleSwipedRight = () => {
    handleClick(data.previous);
  };

  const swipeable = useSwipeable({
    onSwipedLeft: () => handleSwipedLeft(),
    onSwipedRight: () => handleSwipedRight(),
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          router.back();
          break;
        case 'ArrowLeft':
          handleClick(data.previous);
          break;
        case 'ArrowRight':
          handleClick(data.next);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container} {...swipeable}>
      <button className={styles.back} onClick={router.back} type="button">
        <X className={styles.icon} />
      </button>
      <span className={styles.index}>
        {pad(data.index + 1)} / {pad(data.total)}
      </span>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src={data.image.src}
          thumb={data.image.thumb}
        />
        <figcaption className={styles.caption}>
          <span className={styles.title}>{data.image.title}</span>
          <span className={styles.location}>
            {data.image.location.region} &mdash; {data.image.location.country}
          </span>
          <span className={styles.altitude}>
            <Ui.Units.Length isSmall value={data.image.elevation} />
          </span>
        </figcaption>
      </figure>
      <nav
        aria-label="image supplementary navigation"
        className={styles.navigation}
      >
        <button
          aria-label="previous image"
          className={styles.navigate}
          onClick={() => handleClick(data.previous)}
          type="button"
        >
          <MoveLeft className={styles.icon} />
        </button>
        <button
          aria-label="next image"
          className={styles.navigate}
          onClick={() => handleClick(data.next)}
          type="button"
        >
          <MoveRight className={styles.icon} />
        </button>
      </nav>
    </div>
  );
};

const styles = tw({
  container: `
    flex justify-center items-center
    h-svh
    overflow-hidden
    px-20

    portrait:px-6

    lg:px-6
  `,
  index: `
    absolute top-6 right-6
    tracking-widest
    text-tiny
    uppercase

    sm:text-xtiny
  `,
  figure: `
    relative
    w-full max-w-6xl
  `,
  image: `
    !object-contain
    select-none
    rounded-sm
    !h-auto
  `,
  caption: `
    absolute bottom-0 right-0
    flex flex-col
    uppercase
    text-tiny text-right text-white
    px-4 py-2

    sm:bottom-2
    sm:right-4
    sm:text-xtiny
  `,
  title: `
    font-black
  `,
  location: `
    italic
  `,
  altitude: `
    font-mono
    lowercase
  `,
  back: `
    absolute top-3 left-3.5 z-100
    p-2
  `,
  icon: `
    w-6 h-6
    stroke-1
  `,
  navigation: `
    absolute bottom-2 left-4 right-4
    flex items-center justify-between
  `,
  navigate: `
    p-2
  `,
});

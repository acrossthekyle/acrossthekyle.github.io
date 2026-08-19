'use client';

import { MoveLeft, MoveRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
    <main className={styles.container}>
      <section aria-label="image details" className={styles.container}>
        <button className={styles.back} onClick={router.back} type="button">
          <X className={styles.icon} />
        </button>
        <figure className={styles.figure}>
          <Ui.Image
            className={styles.image}
            src={data.image.src}
          />
          <figcaption className={styles.caption}>
            <span className={styles.index}>
              {pad(data.index + 1)} / {pad(data.total)}
            </span>
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
            className={`${styles.navigate} ${styles.left}`}
            onClick={() => handleClick(data.previous)}
            type="button"
          >
            <MoveLeft className={styles.icon} />
          </button>
          <button
            aria-label="next image"
            className={`${styles.navigate} ${styles.right}`}
            onClick={() => handleClick(data.next)}
            type="button"
          >
            <MoveRight className={styles.icon} />
          </button>
        </nav>
      </section>
    </main>
  );
};

const styles = tw({
  container: `
    h-full
  `,
  figure: `
    relative
    h-full w-full max-w-6xl
    mx-auto
  `,
  image: `
    !object-contain
    block
    select-none
    rounded-sm
    m-auto
  `,
  caption: `
    absolute bottom-4 right-1/2 z-80
    translate-x-1/2
    flex flex-col
    w-full
    uppercase
    text-tiny

    sm:text-xtiny
  `,
  index: `
    block
    px-1 pt-0.5
    self-center
    backdrop-blur-xl
    tracking-widest
    text-tiny
    uppercase
    font-mono

    sm:text-xtiny
  `,
  title: `
    block
    px-1 pt-0.5
    self-center
    backdrop-blur-xl
    font-black
    text-xs

    sm:text-tiny
  `,
  location: `
    block
    px-1
    self-center
    backdrop-blur-xl
    italic
  `,
  altitude: `
    block
    px-1 pb-0.25
    self-center
    backdrop-blur-xl
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
    absolute inset-0 z-90
    flex justify-between
  `,
  navigate: `
    h-full w-1/2
  `,
  left: `
    flex items-end justify-start
    py-4 px-6
    !cursor-w-resize
  `,
  right: `
    flex items-end justify-end
    py-4 px-6
    !cursor-e-resize
  `,
});

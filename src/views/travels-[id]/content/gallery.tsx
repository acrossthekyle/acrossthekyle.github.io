'use client';

import Link from 'next/link';

import { useView } from '@/hooks/useView';
import tw from '@/styles';
import type { Image } from '@/types';
import { Ui } from '@/ui';

type Props = {
  collection: string;
  images: Image[];
};

export default function Gallery({ collection, images }: Props) {
  const { view } = useView();

  return (
    <ul className={styles.items(view)}>
      {images.map((image, index) => (
        <li key={image.src}>
          <figure className={styles.figure(view)} id={`image-${index}`}>
            <Link
              className={styles.maximize}
              href={`/travels/${collection}/img/${image.id}`}
            >
              <Ui.Image
                className={styles.image}
                src={image.src}
                thumb={image.thumb}
              />
            </Link>
            {view === 'theater' && (
              <figcaption className={styles.caption(index)}>
                <span className={styles.title}>{image.title}</span>
                <span className={styles.location}>
                  {image.location.region} &mdash; {image.location.country}
                </span>
                <span className={styles.altitude}>
                  <Ui.Units.Length isSmall value={image.elevation} />
                </span>
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
};

const styles = tw({
  items: (view: string) => tw(`
    grid gap-4
    px-6 pb-6

    ${view === 'theater' && 'grid-cols-1'}
    ${view === 'grid' && 'grid-cols-2 lg:grid-cols-3'}
  `),
  figure: (view: string) => tw(`
    group
    relative
    ${view === 'theater' && 'h-auto w-full'}
    ${view === 'grid' && 'w-full h-44 lg:h-20'}
  `),
  image: `
    rounded-md

    motion-safe:duration-300

    lg:grayscale

    group-hover:grayscale-0
  `,
  caption: (index: number) => tw(`
    absolute bottom-6 z-5
    ${index % 2 === 0 ? 'left-6' : 'right-6'}
    flex flex-col
    uppercase
    text-tiny
    ${index % 2 === 0 ? '' : 'text-right'}

    sm:text-xtiny
  `),
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
  maximize: `
    w-full h-full
  `,
});

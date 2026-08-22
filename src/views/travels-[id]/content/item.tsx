'use client';

import tw from '@/styles';
import type { Image } from '@/types';
import { Ui } from '@/ui';

type Props = {
  image: Image;
  index: number;
};

const STYLES = [
  'w-[calc(33%-0.5rem)] xl:w-[calc(35%-0.5rem)]',
  'w-[calc(60%-0.5rem)] xl:w-[calc(40%-0.5rem)]',

  'w-[calc(50%-0.5rem)] xl:w-[calc(55%-0.5rem)]',
  'w-[calc(50%-0.5rem)] xl:w-[calc(33%-0.5rem)]',

  'w-[calc(45%-0.5rem)] xl:w-[calc(40%-0.5rem)]',
  'w-[calc(35%-0.5rem)] xl:w-[calc(55%-0.5rem)]',

  'w-[calc(66%-0.5rem)] xl:w-[calc(45%-0.5rem)]',
  'w-[calc(33%-0.5rem)] xl:w-[calc(30%-0.5rem)]',

  'w-[calc(40%-0.5rem)] xl:w-[calc(30%-0.5rem)]',
  'w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.5rem)]',
];

export default function Item({ image, index, isExpanded, onClick }: Props) {
  return (
    <li className={styles.item(index, isExpanded)}>
      <button
        aria-label="expand image"
        className={styles.cta(isExpanded)}
        onClick={() => onClick(index)}
        type="button"
      >
        <Ui.Image
          className={styles.image(isExpanded)}
          src={image.src}
          thumb={image.thumb}
        />
        {isExpanded && (
          <span className={styles.caption}>
            <span className={styles.eyebrow}>
              {image.when.long[0]}
            </span>
            <span className={styles.title}>
              {image.title || image.location.region}
            </span>
            <span className={styles.lid}>
              <Ui.Units.Length isSmall value={image.elevation} />
            </span>
          </span>
        )}
      </button>
    </li>
  );
};

const styles = tw({
  item: (index: number, isExpanded: boolean) => tw(`
    ${isExpanded ? 'z-50 mb-31.75' : 'relative z-0'}
    inline-block
    h-30
    ${STYLES[index % STYLES.length]}
    mr-1.5
  `),
  cta: (isExpanded: boolean) => tw(`
    group
    absolute left-1/2 -translate-x-1/2
    overflow-hidden
    rounded-xs

    ${isExpanded
      ? 'w-full h-61.75 z-1'
      : 'inset-0 w-full h-30 z-0'
    }
  `),
  image: (isExpanded: boolean) => tw(`
    ${isExpanded
      ? 'grayscale-0'
      : 'grayscale'
    }

    motion-safe:duration-500

    group-hover:grayscale-0
  `),
  caption: `
    absolute inset-4
    flex flex-col justify-end gap-1
    uppercase
    leading-[0.8]
    text-tiny text-white text-left
    whitespace-nowrap
  `,
  eyebrow: `
    italic
    text-xtiny
  `,
  title: `
    font-black
  `,
  lid: `
    font-mono
    text-xtiny
  `,
});

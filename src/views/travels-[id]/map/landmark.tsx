'use client';

import { MouseEvent, TouchEvent, useState } from 'react';
import { Circle, Tooltip } from 'react-leaflet';

import tw from '@/styles';
import type { Landmark as LandmarkType } from '@/types';

import { parseCoordinates } from './utils';

type Props = {
  landmark: LandmarkType;
};

export default function Landmark({ landmark }: Props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: MouseEvent | TouchEvent) => {
    event.stopPropagation();

    setIsActive(previous => !previous);
  };

  const isLeft = landmark.orientation === 'left';

  return (
    <Circle
      // @ts-expect-error - format is correct
      center={parseCoordinates(landmark.coordinates)}
      radius={0}
      opacity={0}
      fillOpacity={0}
      weight={0}
    >
      <Tooltip
        className={styles.container(isLeft)}
        // @ts-expect-error - format is correct
        direction={landmark.orientation}
        offset={isLeft ? [-6, 0] : [0, 0]}
        permanent
      >
        <div className={styles.outer(isLeft)}>
          <div
            className={styles.inner}
            onClick={handleClick}
          >
            <span className={styles.content(isLeft)}>
              <span className={styles.label}>{landmark.label}</span>
              {!!landmark.title && (
                <span className={styles.title(isActive)}>: {landmark.title}</span>
              )}
            </span>
          </div>
        </div>
      </Tooltip>
    </Circle>
  );
};

const styles = tw({
  container: (isLeft: boolean) => tw(`
    !absolute !flex
    ${isLeft ? '!justify-end !-translate-x-full' : '!justify-start'}
    !p-0
    !bg-transparent
    !border-none
    !shadow-none
  `),
  outer: (isLeft: boolean) => tw(`
    group
    absolute top-0
    flex items-center
    w-[500px]
    h-0
    !pointer-events-auto
    ${isLeft ? 'right-0 justify-end' : 'left-0 justify-start'}
  `),
  inner: `
    !bg-transparent !border-none !shadow-none !p-0 !absolute !overflow-visible !pointer-events-auto
  `,
  content: (isLeft: boolean) => tw(`
    relative
    inline-flex flex-row justify-center
    ${isLeft ? 'items-center' : 'items-center'}
    h-5 w-fit
    px-2
    text-xtiny text-(--background) dark:text-(--foreground)
    font-mono
    leading-[0.8]
    tracking-widest
    ${isLeft ? 'rounded-l-sm' : 'rounded-r-sm'}
    bg-(--foreground) dark:bg-(--background)
    uppercase

    before:absolute
    ${isLeft ? 'before:-right-1.75' : 'before:-left-1.75'}
    before:top-0.75
    before:w-3.5
    before:h-3.5
    ${isLeft ? 'before:rotate-225' : 'before:rotate-45'}
    before:rounded-bl-sm
    before:bg-(--foreground)
    dark:before:bg-(--background)

    after:absolute
    after:z-1
    after:top-1/2
    ${isLeft ? 'after:right-3' : 'after:-left-3'}
    after:w-1
    after:h-1
    after:-translate-x-1/2
    after:-translate-y-1/2
    after:translate-x-3
    after:rounded-full
    after:bg-white
  `),
  label: `
    relative z-2
  `,
  title: (isActive: boolean) => tw(`
    relative z-2
    whitespace-nowrap
    leading-[1]
    overflow-hidden

    motion-safe:duration-300

    ${isActive ? 'max-w-76 opacity-100' : 'max-w-0 opacity-0'}

    group-hover:max-w-76
    group-hover:opacity-100
  `),
});

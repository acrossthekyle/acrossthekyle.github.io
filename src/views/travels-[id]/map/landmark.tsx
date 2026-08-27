'use client';

import { Circle, Tooltip } from 'react-leaflet';

import tw from '@/styles';
import type { Landmark as LandmarkType } from '@/types';

import { parseCoordinates } from './utils';

type Props = {
  landmark: LandmarkType;
};

export default function Landmark({ landmark }: Props) {
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
        // @ts-expect-error - format is correct
        direction={landmark.orientation}
        offset={isLeft ? [-6, 0] : [0, 0]}
        permanent
      >
        <span className={styles.container(isLeft)}>
          {landmark.label}
        </span>
      </Tooltip>
    </Circle>
  );
};

const styles = {
  container: (isLeft: boolean) => tw(`
    relative
    inline-flex flex-row justify-center items-center
    h-5 w-fit
    ${isLeft ? 'pl-2 pr-3' : 'pl-3 pr-2'}
    text-xtiny text-(--background)
    font-mono
    leading-[0.8]
    tracking-widest
    rounded-sm
    bg-(--foreground)
    uppercase

    before:absolute
    ${isLeft ? 'before:-right-1.5' : 'before:-left-1.5'}
    before:top-0.75
    before:w-3.5
    before:h-3.5
    ${isLeft ? 'before:rotate-225' : 'before:rotate-45'}
    before:rounded-bl-sm
    before:bg-(--foreground)

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
    after:bg-(--background)
  `),
};

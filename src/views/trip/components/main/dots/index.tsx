'use client';

import { useState, useEffect } from 'react';

import styles from './stylesheet';

const MEDIUM_SCALE_RATIO = 0.7;
const SMALL_SCALE_RATIO = 0.4;
const CAMERA_MODE_CONDITION = 5;
const NUMBER_OF_DOTS = 3;

const useScale = (index: number = 0) => {
  const [focusArea, setFocusArea] = useState([0, 0 + NUMBER_OF_DOTS - 1])

  useEffect(() => {
    if (index < focusArea[0]) {
      setFocusArea([index, index + NUMBER_OF_DOTS - 1])
    } else if (index > focusArea[1]) {
      const newFocusStartPos = focusArea[0] + (index - focusArea[1])

      setFocusArea([newFocusStartPos, newFocusStartPos + NUMBER_OF_DOTS - 1])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, focusArea, NUMBER_OF_DOTS]);

  return {
    getDotScaleRatio: (dotPosition: number): number => {
      if (!(dotPosition >= focusArea[0] && dotPosition <= focusArea[1])) {
        const distance = Math.min(
          Math.abs(dotPosition - focusArea[0]),
          Math.abs(dotPosition - focusArea[1])
        )

        if (distance === 1) {
          return MEDIUM_SCALE_RATIO
        }

        if (distance === 2) {
          return SMALL_SCALE_RATIO
        }

        return 0
      }

      return 1
    }
  }
}

type DotProps = {
  isActive: boolean;
  onClick: () => void;
  position: number;
  scaleRatio: number;
};

const Dot = ({ isActive, onClick, position, scaleRatio }: DotProps) => {
  const actualSize = 6 * scaleRatio;

  return (
    <button
      className={`${styles.dot} ${isActive ? styles.dotted : ''}`.trim()}
      onClick={onClick}
      style={{
        width: `${actualSize}px`,
        height: `${actualSize}px`,
        marginLeft: scaleRatio === 0 || position === 0 ? 0 : `8px`
      }}
      type="button"
    />
  );
}

type Props = {
  active: number;
  onClick: (index: number) => void;
  total: number;
};

export default function Dots({
  active,
  onClick,
  total,
}: Props) {
  const { getDotScaleRatio } = useScale(active)

  return (
    <div aria-hidden="true" className={styles.dots}>
      {[...Array(total)].map((_, index) => (
        <Dot
          isActive={index === active}
          key={index}
          onClick={() => onClick(index)}
          position={index}
          scaleRatio={
            total > CAMERA_MODE_CONDITION ? getDotScaleRatio(index) : 1
          }
        />
      ))}
    </div>
  )
};

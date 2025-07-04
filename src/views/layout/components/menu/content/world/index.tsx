import Image from 'next/image';
import { Fragment } from 'react';

import { useModel } from './model';
import styles from './stylesheet';

type LineComponentProps = {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
};

const LineComponent = ({ x1, y1, x2, y2 }: LineComponentProps) => {
  return (
    <svg className={styles.svg}>
      <line
        x1={`${Number(x1) + 0.75}%`}
        y1={`${Number(y1) + 0.75}%`}
        x2={`${Number(x2) + 0.75}%`}
        y2={`${Number(y2) + 0.75}%`}
        stroke="white"
        strokeDasharray="4 2"
        strokeWidth="1"
      />
    </svg>
  );
};

const HOME = {
  x1: '15.5',
  y1: '28.5',
};

export default function World() {
  const { markers } = useModel();

  return (
    <figure className={styles.figure}>
      <Image
        alt=""
        className={styles.image}
        height="1080"
        src="2024/06/28/0cf56f29-a903-4756-bb03-40b6b4b2d2fd.webp"
        width="1920"
      />
      {markers.map(({ top, left }, index: number) => (
        <Fragment key={index}>
          <LineComponent x1={HOME.x1} y1={HOME.y1} x2={left} y2={top} />
          <span
            className={`${styles.marker} ${styles.static}`}
            style={{ top: `${top}%`, left: `${left}%` }}
          />
        </Fragment>
      ))}
      <span className={`${styles.marker} ${styles.home}`} />
    </figure>
  );
}

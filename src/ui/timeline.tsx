'use client';

import { useRouter } from 'next/router';

import styles from '@/styles/ui/timeline.module.scss';

import Button from './button';

type Segment = {
  date: string;
  title: string;
};

type Props = {
  segments: Segment[];
  title: string;
};

function Timeline({ segments, title }: Props) {
  const router = useRouter();

  return (
    <>
      <div className={styles.anchor} id="timeline" />
      <div className={styles.container}>
        {segments.map(({ date, title }: Segment, index: number) => (
          <div className={styles.block} key={`segment-${index}`}>
            <span className={styles.date}>
              <span className={styles.day}>
                Day {String(index + 1).padStart(2, '0')}
              </span>
            </span>
            <div aria-hidden="true" className={styles.marker} />
            <div className={styles.title}>
              <span>{date}</span>
              <h3>{title}</h3>
              <Button
                className={styles.more}
                href={`${router.asPath.indexOf('#') > -1 ? router.asPath.substring(0, router.asPath.indexOf('#')) : router.asPath}/${String(index + 1).padStart(2, '0')}`}
                text="View"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Timeline;

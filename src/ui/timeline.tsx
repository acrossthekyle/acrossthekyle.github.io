'use client';

import { useRouter } from 'next/router';

import styles from '@/styles/ui/timeline.module.scss';

import { GARMIN_URL } from '../constants';

import Button from './button';

type Segment = {
  date: string;
  garmin?: string;
  title: string;
};

type Props = {
  segments: Segment[];
  title: string;
};

function getHref(uri: string, index: number, garmin?: string) {
  if (garmin) {
    return `${GARMIN_URL}${garmin}`;
  }

  return `${uri.indexOf('#') > -1 ? uri.substring(0, uri.indexOf('#')) : uri}/${String(index + 1).padStart(2, '0')}`;
}

function getCtaText(garmin?: string) {
  if (garmin) {
    return 'View Route on Garmin.com';
  }

  return 'View';
}

function Timeline({ segments, title }: Props) {
  const router = useRouter();

  return (
    <>
      <div className={styles.anchor} id="timeline" />
      <div className={styles.container}>
        {segments.map(({ date, garmin, title }: Segment, index: number) => (
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
                href={getHref(router.asPath, index, garmin)}
                text={getCtaText(garmin)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Timeline;

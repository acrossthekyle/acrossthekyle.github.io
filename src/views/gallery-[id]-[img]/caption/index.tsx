'use client';

import { useEffect, useState } from 'react';

import styles from './stylesheet';
import type { Exif, Props } from './types';

export default function Caption({ src }: Props) {
  const [data, setData] = useState<Exif | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const response = await fetch(`/image?src=${src}`);

      const result = await response.json();

      setIsLoading(false);

      setData(Array.isArray(result) ? null : result);
    };

    getData();
  }, [src]);

  return (
    <figcaption className={styles.caption}>
      {isLoading && (
        <>...</>
      )}
      {!isLoading && data !== null && (
        <ul className={styles.items}>
          <li className={styles.item}>
            <span className={styles.eyebrow}>Camera</span>
            {data.exif.image.Model}
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>ISO</span>
            {data.exif.exif.ISO}
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>Focal length</span>
            {data.exif.exif.FocalLengthIn35mmFormat} mm
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>Exposure</span>
            {Number(data.exif.exif.ExposureCompensation).toFixed(1)} ev
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>F-number</span>
            <span className={styles.emphasis}>f</span>/{data.exif.exif.FNumber.toFixed(2)}
          </li>
          <li className={styles.item}>
            <span className={styles.eyebrow}>Aperture</span>
            {data.exif.exif.ApertureValue.toFixed(4).replace('.', '/')}{' '}<span className={styles.emphasis}>s</span>
          </li>
        </ul>
      )}
    </figcaption>
  );
}



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
        <ul aria-label="stats" className={styles.stats}>
          <li>
            <strong>Camera</strong>
            <small>{data.exif.image.Model}</small>
          </li>
          <li>
            <strong>ISO</strong>
            <small>{data.exif.exif.ISO}</small>
          </li>
          <li>
            <strong>Focal length</strong>
            <small>{data.exif.exif.FocalLengthIn35mmFormat} mm</small>
          </li>
          <li>
            <strong>Exposure</strong>
            <small>{Number(data.exif.exif.ExposureCompensation).toFixed(1)} ev</small>
          </li>
          <li>
            <strong>F-number</strong>
            <small>
              <span className={styles.emphasis}>f</span>/{data.exif.exif.FNumber.toFixed(2)}
            </small>
          </li>
          <li>
            <strong>Aperture</strong>
            <small>
              {data.exif.exif.ApertureValue.toFixed(4).replace('.', '/')} <span className={styles.emphasis}>s</span>
            </small>
          </li>
        </ul>
      )}
    </figcaption>
  );
}



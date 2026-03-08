'use client';

import { useEffect, useState } from 'react';

import { Small, Strong } from '@/ui/typography';

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
            <Strong>Camera</Strong>
            <Small>{data.exif.image.Model}</Small>
          </li>
          <li>
            <Strong>ISO</Strong>
            <Small>{data.exif.exif.ISO}</Small>
          </li>
          <li>
            <Strong>Focal length</Strong>
            <Small>{data.exif.exif.FocalLengthIn35mmFormat} mm</Small>
          </li>
          <li>
            <Strong>Exposure</Strong>
            <Small>{Number(data.exif.exif.ExposureCompensation).toFixed(1)} ev</Small>
          </li>
          <li>
            <Strong>F-number</Strong>
            <Small>
              <span className={styles.emphasis}>f</span>/{data.exif.exif.FNumber.toFixed(2)}
            </Small>
          </li>
          <li>
            <Strong>Aperture</Strong>
            <Small>
              {data.exif.exif.ApertureValue.toFixed(4).replace('.', '/')} <span className={styles.emphasis}>s</span>
            </Small>
          </li>
        </ul>
      )}
    </figcaption>
  );
}



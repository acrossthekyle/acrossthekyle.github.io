'use client';

import { useEffect, useState } from 'react';

import { ImageCaption } from '@/ui/image';

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
    <ImageCaption>
      {isLoading && (
        <>...</>
      )}
      {!isLoading && data !== null && (
        <>
          {data.exif.image.Model}
          <br />
          ISO {data.exif.exif.ISO} {data.exif.exif.FocalLengthIn35mmFormat} mm {Number(data.exif.exif.ExposureCompensation).toFixed(1)} ev <span className={styles.emphasis}>f</span> {data.exif.exif.FNumber.toFixed(2)} {data.exif.exif.ApertureValue.toFixed(4).replace('.', '/')} <span className={styles.emphasis}>s</span>
        </>
      )}
    </ImageCaption>
  );
}



'use client';

import { useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import styles from './stylesheet';

type Props = {
  index: string;
  location: string;
  src: string;
  title: string;
  total: string;
};

type Data = {
  exif: {
    image: {
      Model: string;
    };
    exif: {
      ISO: string;
      FocalLengthIn35mmFormat: string;
      ExposureCompensation: string;
      FNumber: number;
      ApertureValue: number;
    };
  };
};

export default function Modal({ index, location, src, title, total }: Props) {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnReady = async () => {
    setIsLoading(true);

    const response = await fetch(`/image?src=${src}`);

    const result = await response.json();

    setIsLoading(false);

    setData(Array.isArray(result) ? null : result);
  };

  const {
    dialog,
    handleOnBackdrop,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog(handleOnReady);

  return (
    <>
      <button
        aria-controls="image"
        className={styles.cta}
        onClick={handleOnOpen}
        type="button"
      >
        <Image
          alt=""
          height={432}
          sizes="(max-width: 768px) 32vw, 40vw"
          src={src}
          width={768}
        />
      </button>
      <Dialog
        id="image"
        isOpen={isOpen}
        onBackdrop={handleOnBackdrop}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader className={styles.header}>
          <strong>{title}</strong>
          <small>{index}/{total} • {location}</small>
        </DialogHeader>
        <DialogContent>
          <ImageFigure className={styles.figure}>
            <Image
              alt=""
              height={432}
              sizes="(max-width: 768px) 32vw, 50vw"
              src={src}
              width={768}
            />
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
          </ImageFigure>
        </DialogContent>
      </Dialog>
    </>
  );
}

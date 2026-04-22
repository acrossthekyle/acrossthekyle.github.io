'use client';

import {
  Aperture,
  ArrowRight,
  ArrowUpFromDot,
  Calendar1,
  Camera,
  Flag,
  Fullscreen,
  LayoutDashboard,
  LensConcave,
  Pencil,
  Type,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { useDialog } from '@/hooks/useDialog';
import type { Album, Data } from '@/types';

import { Image } from '../../../ui/image';
import styles from '../stylesheet';

type Props = {
  data?: {
    album?: Album;
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();

  if (!data || !data?.album || !data?.image) {
    return null;
  }

  return (
    <figure className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          size="large"
          src={data.image.src}
        />
      </div>
      <figcaption className={styles.caption}>
        <h2
          className={`${styles.item(false)} ${styles.header}`}
          id="dialog-header"
        >
          <span aria-hidden="true" className={styles.prefix}>
            <Type className={styles.icon} />
          </span>
          <span>
            <span className={styles.faded}>Title</span>
            {data.image.title}
          </span>
        </h2>
        <ul className={styles.items}>
          <li>
            <Link
              className={styles.link}
              href={`?a=${data.album.id}`}
              onClick={onClose}
            >
              <span aria-hidden="true" className={styles.prefix}>
                <LayoutDashboard className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>From</span>
                {data.album.title} <ArrowRight className={styles.external} />
              </p>
            </Link>
          </li>
          <li className={styles.item(false)}>
            <span aria-hidden="true" className={styles.prefix}>
              <Flag className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Location</span>
              {data.image.location}, {data.album.location}
            </p>
          </li>
          <li className={styles.item(false)}>
            <span aria-hidden="true" className={styles.prefix}>
              <Calendar1 className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Taken on</span>
              {data.image.date}
            </p>
          </li>
          <li className={styles.item(false)}>
            <span aria-hidden="true" className={styles.prefix}>
              <ArrowUpFromDot className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Elevation</span>
              2,323 ft
            </p>
          </li>
          {data.image.exif && (
            <>
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Camera className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>Camera</span>
                  {data.image.exif.camera}
                </p>
              </li>
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <LensConcave className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>Focal Length</span>
                  {data.image.exif.focal} mm
                </p>
              </li>
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Aperture className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>Aperture</span>
                  {data.image.exif.fnumber}
                </p>
              </li>
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Zap className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>Shutter Speed</span>
                  {data.image.exif.aperture}
                </p>
              </li>
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Fullscreen className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>ISO</span>
                  {data.image.exif.iso}
                </p>
              </li>
            </>
          )}
          <li className={styles.item(false)}>
            <span aria-hidden="true" className={styles.prefix}>
              <Pencil className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Notes</span>
              Summit of Croda del Becco (highest point of the AV1) with Lago de Brias seen below on first day before reaching Rifugio Biella
            </p>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

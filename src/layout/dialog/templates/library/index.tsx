'use client';

import {
  ArrowRight,
  ArrowUpFromDot,
  Calendar1,
  Camera,
  Flag,
  LayoutDashboard,
  Maximize,
  Minimize,
  Pencil,
  Shrink,
  Type,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album, Data } from '@/types';
import { Ui } from '@/ui';

import styles from '../stylesheet';

type Props = {
  data?: {
    album?: Album;
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  const [isRenderingDetails,  setIsRenderingDetails] = useState(false);

  const { onClose } = useDialog();
  const { onView } = useView();

  const handleOnAlbum = () => {
    onClose();

    onView('library');
  };

  const handleOnDetails = () => {
    setIsRenderingDetails(previous => !previous);
  }

  const handleOnClose = () => {
    setIsRenderingDetails(false);

    onClose();
  };

  if (!data || !data?.album || !data?.image) {
    return null;
  }

  return (
    <>
      <figure className={styles.container}>
        <div className={styles.wrapper}>
          <Ui.Images.Image
            className={styles.image}
            size="large"
            src={data.image.src}
          />
        </div>
        <figcaption className={styles.caption(isRenderingDetails)}>
          <div className={styles.inner}>
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
                  onClick={handleOnAlbum}
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
                  2,323 ft {/* todo */}
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
                </>
              )}
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Pencil className={styles.icon} />
                </span>
                <p>
                  <span className={styles.faded}>Notes</span>
                  Summit of Croda del Becco (highest point of the AV1) with Lago de Brias seen below on first day before reaching Rifugio Biella {/* todo */}
                </p>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
      <div className={styles.toggles}>
        <button className={styles.toggle} onClick={handleOnDetails} type="button">
          {isRenderingDetails ? (
            <Minimize className={styles.svg} />
          ) : (
            <Maximize className={styles.svg} />
          )} Details
        </button>
        <button className={styles.toggle} onClick={handleOnClose} type="button">
          <Shrink className={styles.svg} /> Close
        </button>
      </div>
    </>
  );
}

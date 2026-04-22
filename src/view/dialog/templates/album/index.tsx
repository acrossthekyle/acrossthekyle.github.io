'use client';

import {
  ArrowLeft,
  ArrowRight,
  Calendar1,
  GalleryVerticalEnd,
  Globe,
  LayoutDashboard,
  Pencil,
  Bookmark,
  Flag,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';

import { Image } from '../../../ui/image';
import styles from '../stylesheet';

import Map from './map';

type Props = {
  data?: {
    album?: Album;
  };
};

export default function Template({ data }: Props) {
  const [hasMoreNotes, setHasMoreNotes] = useState(false);
  const [isViewingMoreNotes, setIsViewingMoreNotes] = useState(false);

  const { onClose } = useDialog();
  const { onChange } = useView();

  const notes = useCallback((node: HTMLParagraphElement | null) => {
    if (node !== null) {
      const style = window.getComputedStyle(node);
      let lineHeight = parseFloat(style.lineHeight);

      if (isNaN(lineHeight)) {
        lineHeight = parseFloat(style.fontSize) * 1.2;
      }

      const lineCount = Math.round(node.scrollHeight / lineHeight);

      setHasMoreNotes(lineCount > 6);
    }
  }, []);

  const handleOnAlbum = () => {
    onClose();

    onChange('library');
  };

  const handleOnMoreLess = () => {
    setIsViewingMoreNotes(previous => !previous);
  };

  if (!data || !data.album) {
    return null;
  }

  return (
    <figure className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          size="large"
          src={data.album.images[0].src}
        />
      </div>
      <figcaption className={`${styles.caption} ${styles.between}`}>
        <div>
          <h2 className={styles.header} id="dialog-header">
            <Link
              className={styles.link}
              href={`?a=${data.album.id}`}
              onClick={handleOnAlbum}
            >
              <span aria-hidden="true" className={styles.prefix}>
                <LayoutDashboard className={styles.icon} />
              </span>
              <span>
                <span className={styles.faded}>Album Name</span>
                {data.album.title} <ArrowRight className={styles.external} />
              </span>
            </Link>
          </h2>
          <ul className={styles.items}>
            <li className={styles.item(false)}>
              <span aria-hidden="true" className={styles.prefix}>
                <Bookmark className={styles.icon} />
              </span>
              <p className={styles.capitalize}>
                <span className={styles.faded}>Category</span>
                {data.album.category}
              </p>
            </li>
            <li className={styles.item(false)}>
              <span aria-hidden="true" className={styles.prefix}>
                <Flag className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>Location</span>
                {data.album.location}
              </p>
            </li>
            <li className={styles.item(false)}>
              <span aria-hidden="true" className={styles.prefix}>
                <Globe className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>Latitude, Longitude</span>
                {data.album.coordinates}
              </p>
            </li>
            <li className={styles.item(false)}>
              <span aria-hidden="true" className={styles.prefix}>
                <Calendar1 className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>When</span>
                {data.album.when}
              </p>
            </li>
            <li className={styles.item(false)}>
              <span aria-hidden="true" className={styles.prefix}>
                <GalleryVerticalEnd className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>Images</span>
                {data.album.images.length}
              </p>
            </li>
            <li className={styles.item(isViewingMoreNotes)}>
              <span aria-hidden="true" className={styles.prefix}>
                <Pencil className={styles.icon} />
              </span>
              <div>
                <p
                  className={isViewingMoreNotes ? undefined : styles.clamp}
                  ref={notes}
                >
                  <span className={styles.faded}>Field Notes</span>
                  Thru-hike over 18 days and 141 miles with a peak altitude of 17.775 ft at Thorong La Pass, rooms cost $1-3 each night, mattresses were harder as the elevation went higher, friendly locals helped us find our way, great food, amazing experience
                </p>
                {hasMoreNotes && (
                  <button
                    className={styles.more}
                    onClick={handleOnMoreLess}
                    type="button"
                  >
                    {isViewingMoreNotes && (
                      <>
                        <ArrowLeft className={styles.external} /> Less
                      </>
                    )}
                    {!isViewingMoreNotes && (
                      <>
                        More <ArrowRight className={styles.external} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
        <Map position={{ left: '40%', top: '50%' }} />
      </figcaption>
    </figure>
  );
}

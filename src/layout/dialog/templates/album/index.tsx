'use client';

import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Calendar1,
  Flag,
  GalleryVerticalEnd,
  Globe,
  LayoutDashboard,
  Maximize,
  Minimize,
  Pencil,
  Shrink,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useView } from '@/hooks/useView';
import type { Album } from '@/types';
import { Ui } from '@/ui';

import styles from '../stylesheet';

import Map from './map';

type Props = {
  data?: {
    album?: Album;
  };
};

export default function Template({ data }: Props) {
  const [isViewingMoreNotes, setIsViewingMoreNotes] = useState(false);
  const [isRenderingDetails,  setIsRenderingDetails] = useState(false);

  const { onClose } = useDialog();
  const { onView } = useView();

  const handleOnAlbum = () => {
    onClose();

    onView('library');
  };

  const handleOnMoreLess = () => {
    setIsViewingMoreNotes(previous => !previous);
  };

  const handleOnDetails = () => {
    setIsRenderingDetails((isActive: boolean) => {
      if (isActive) {
        setIsViewingMoreNotes(false);
      }

      return !isActive
    });
  }

  const handleOnClose = () => {
    setIsRenderingDetails(false);
    setIsViewingMoreNotes(false);

    onClose();
  };

  if (!data || !data.album) {
    return null;
  }

  return (
    <>
      <figure className={styles.container}>
        <div className={styles.wrapper}>
          <Ui.Images.Image
            className={styles.image}
            size="large"
            src={data.album.images[0].src}
          />
        </div>
        <figcaption className={styles.caption(isRenderingDetails)}>
          <div className={styles.inner}>
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
              {!isViewingMoreNotes && (
                <>
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
                </>
              )}
              <li className={styles.item(false)}>
                <span aria-hidden="true" className={styles.prefix}>
                  <Pencil className={styles.icon} />
                </span>
                <div>
                  <p className={isViewingMoreNotes ? undefined : styles.clamp}>
                    <span className={styles.faded}>Field Notes</span>
                    Thru-hike over 18 days and 141 miles with a peak altitude of 17.775 ft at Thorong La Pass, rooms cost $1-3 each night, mattresses were harder as the elevation went higher, friendly locals helped us find our way, great food, amazing experience {/* todo */}
                  </p>
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
                </div>
              </li>
            </ul>
            <div className={styles.map} role="presentation">
              <Map position={{ left: '40%', top: '50%' }} /> {/* todo */}
            </div>
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

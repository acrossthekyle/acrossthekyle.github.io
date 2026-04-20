'use client';

import { ArrowRight, Calendar1, GalleryVerticalEnd, Globe, LayoutDashboard, Pencil, Tag, Flag } from 'lucide-react';
import Link from 'next/link';

import { useDialog } from '@/hooks/useDialog';

import type { Album, Data } from '../../types';
import { Image } from '../../ui/image';
import Map from '../../ui/map';

import styles from './stylesheet';

type Props = {
  data: Album;
};

export default function Details({ data }: Props) {
  const { onClose, onNavigate } = useDialog();

  if (!data) {
    return null;
  }

  return (
    <figure className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          size="large"
          src={data.images[0].src}
        />
      </div>
      <figcaption className={styles.caption}>
        <ul className={styles.items}>
          <li>
            <Link className={styles.link} href={`/?album=${data.id}`}>
              <span aria-hidden="true" className={styles.prefix}>
                <LayoutDashboard className={styles.icon} />
              </span>
              <p>
                <span className={styles.faded}>Name</span>
                {data.title} <ArrowRight className={styles.external} />
              </p>
            </Link>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <Tag className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Category</span>
              {data.category}
            </p>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <Flag className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Location</span>
              {data.location}
            </p>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <Globe className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Latitude, Longitude</span>
              {data.coordinates}
            </p>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <Calendar1 className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>When</span>
              {data.when}
            </p>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <GalleryVerticalEnd className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Images</span>
              {data.images.length}
            </p>
          </li>
          <li className={styles.item}>
            <span aria-hidden="true" className={styles.prefix}>
              <Pencil className={styles.icon} />
            </span>
            <p>
              <span className={styles.faded}>Field Notes</span>
              Thru-hike over 18 days and 141 miles with a peak altitude of 17.775 ft at Thorong La Pass, rooms cost $1-3 each night, mattresses were harder as the elevation went higher, friendly locals helped us find our way, great food, amazing experience
            </p>
          </li>
        </ul>
        <Map position={{ left: '40%', top: '50%' }} />
      </figcaption>
    </figure>
  );
}

'use client';

import {
  ArrowRight,
  ArrowUpFromDot,
  Bookmark,
  Calendar1,
  Camera,
  Flag,
  LayoutDashboard,
  Pen,
  Type,
} from 'lucide-react';

import { useView } from '@/hooks/useView';
import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  image: Data;
  onCollection: () => void;
};

export default function Details({
  image,
  onCollection,
}: Props) {
  const { view } = useView();

  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Type className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Title</span>
            {image.title}
          </div>
        </li>
        <li className={styles.item}>
          <Bookmark className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Category</span>
            {image.category}
          </div>
        </li>
        <li className={styles.item}>
          {view === 'collection' ? (
            <>
              <LayoutDashboard className={styles.icon} />
              <div className={styles.data}>
                <span className={styles.label}>Collection</span>
                {image.collection.title}
              </div>
            </>
          ) : (
            <button
              className={styles.link}
              onClick={onCollection}
              type="button"
            >
              <LayoutDashboard className={styles.icon} />
              <div className={styles.data}>
                <span className={styles.label}>Collection</span>
                {image.collection.title} <ArrowRight className={styles.external} />
              </div>
            </button>
          )}
        </li>
        <li className={styles.item}>
          <Flag className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Location</span>
            {image.location.region}, {image.location.country}
          </div>
        </li>
        <li className={styles.item}>
          <Calendar1 className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Taken</span>
            {image.when}
          </div>
        </li>
        <li className={styles.item}>
          <ArrowUpFromDot className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Elevation</span>
            <Ui.Units.Length isSmall value={image.elevation} />
          </div>
        </li>
        <li className={styles.item}>
          <Camera className={styles.icon} />
          <div className={styles.data}>
            <span className={styles.label}>Camera</span>
            {image.camera}
          </div>
        </li>
        {image.notes.length > 0 && (
          <li className={styles.item}>
            <Pen className={styles.icon} />
            <div className={styles.data}>
              <span className={styles.label}>Notes</span>
              {image.notes.join(' ')}
            </div>
          </li>
        )}
      </ul>
      <div className={styles.map}>
        <Ui.Map position={image.collection.position} />
      </div>
    </div>
  );
}

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpFromDot,
  Bookmark,
  Calendar1,
  Camera,
  Flag,
  GalleryVerticalEnd,
  Globe,
  LayoutDashboard,
  Maximize,
  Minimize,
  Pen,
  Shrink,
  Type,
} from 'lucide-react';

import styles from './stylesheet';

type Props = {
  icon: string;
};

function getIcon(icon: string) {
  if (icon === 'ArrowLeft') {
    return <ArrowLeft aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'ArrowRight') {
    return <ArrowRight aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'ArrowUpFromDot') {
    return <ArrowUpFromDot aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Bookmark') {
    return <Bookmark aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Calendar1') {
    return <Calendar1 aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Camera') {
    return <Camera aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Flag') {
    return <Flag aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'GalleryVerticalEnd') {
    return <GalleryVerticalEnd aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Globe') {
    return <Globe aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'LayoutDashboard') {
    return <LayoutDashboard aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Maximize') {
    return <Maximize aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Minimize') {
    return <Minimize aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Pen') {
    return <Pen aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Shrink') {
    return <Shrink aria-hidden="true" className={styles.icon} />
  }

  if (icon === 'Type') {
    return <Type aria-hidden="true" className={styles.icon} />
  }

  return null;
}

export default function Icon({ icon }: Props) {
  return (
    <span aria-hidden="true" className={styles.container}>
      {getIcon(icon)}
    </span>
  );
}

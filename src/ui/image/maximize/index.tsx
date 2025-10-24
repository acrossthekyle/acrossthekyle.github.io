'use client';

import Rotate from '../rotate';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  caption: string[];
  eyebrow: string;
  subtitle: string;
};

export default function Maximize({ caption, eyebrow, subtitle }: Props) {
  const { handleOnMaximize, handleOnWarn, zoomRef } = useModel(
    caption,
    eyebrow,
    subtitle,
  );

  return (
    <>
      <button
        aria-label="maximize image"
        className={styles.landscape}
        onClick={handleOnMaximize}
        ref={zoomRef}
        type="button"
      />
      <button
        aria-label="maximize image warning"
        className={styles.portrait}
        onClick={handleOnWarn}
        type="button"
      />
      <Rotate />
    </>
  );
}

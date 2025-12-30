'use client';

import { ArrowLeft } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  label: string;
  slug: string;
};

export default function Return({ label, slug }: Props) {
  const { handleOnReturn } = useModel(slug);

  return (
    <nav aria-label={`return back to ${label} navigation`} className={styles.container}>
      <button
        className={styles.cta}
        onClick={handleOnReturn}
        type="button"
      >
        <ArrowLeft className={styles.icon} /> {label}
      </button>
    </nav>
  );
}

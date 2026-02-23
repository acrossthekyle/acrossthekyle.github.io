'use client';

import { useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';
import Loading from '@/ui/loading';

import Gpx from './gpx';
import styles from './stylesheet';
import type { Details } from './types';

type Props = {
  date: string;
  index: string;
  slug: string;
  title: string;
  total: string;
};

export default function Modal({ date, index, slug, title, total }: Props) {
  const [data, setData] = useState<Details | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnReady = async () => {
    setIsLoading(true);

    const response = await fetch(`/places/${slug}/${index}`);

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
        aria-controls="details"
        className={styles.cta}
        onClick={handleOnOpen}
        type="button"
      >
        <strong>[+] {date}</strong>
      </button>
      <Dialog
        id="details"
        isOpen={isOpen}
        onBackdrop={handleOnBackdrop}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader>
          <strong>GPX Data</strong>
          {!isLoading && data !== null && (
            <small>{index}/{total} • {title} / {data.location}</small>
          )}
        </DialogHeader>
        <DialogContent>
          {(isLoading || data === null) ? <Loading /> : (
            <Gpx gpx={data.gpx} stats={data.stats} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

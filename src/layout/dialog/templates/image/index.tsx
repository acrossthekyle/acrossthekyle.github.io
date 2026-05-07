'use client';

import {
  Maximize,
  Minimize,
  Plus,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useSize } from '@/hooks/useSize';
import { useView } from '@/hooks/useView';
import type { Data } from '@/types';
import { Ui } from '@/ui';

import Details from './details';
import styles from './stylesheet';

type Props = {
  data?: {
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  const [isRenderingDetails, setIsRenderingDetails] = useState(false);

  const { onClose, onDone, onStack } = useDialog();
  const { onFilter } = useFilter();
  const { onSize, size } = useSize();
  const { onView } = useView();

  const handleOnDone = () => {
    setIsRenderingDetails(false);

    onSize('reset');
  };

  const handleOnDetails = () => {
    setIsRenderingDetails(previous => !previous);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isRenderingDetails) {
          handleOnDetails();
        }
      }
    };

    onStack(isRenderingDetails);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRenderingDetails, onStack]);

  useEffect(() => {
    onDone(() => {
      handleOnDone();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDone, isRenderingDetails, size]);

  const handleOnCollection = () => {
    if (!data?.image) {
      return;
    }

    onFilter(data.image.collection.id);

    onView('collection');

    onClose();

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  if (!data?.image) {
    return null;
  }

  return (
    <>
      <div className={styles.container(isRenderingDetails)}>
        <Ui.Image
          className={styles.image(size, isRenderingDetails)}
          priority
          size="large"
          src={data.image.src}
          thumb={data.image.thumb}
        />
        <button
          className={styles.toggle}
          onClick={() => onSize()}
          title={size === 'full' ? 'Shrink image size' : 'Expand image size'}
          type="button"
        >
          {size === 'full' ? (
            <Minimize className={styles.resize} />
          ) : (
            <Maximize className={styles.resize} />
          )}
        </button>
      </div>
      <div
        aria-label="image details"
        className={styles.caption(size !== 'full', isRenderingDetails)}
        id="image-details"
      >
        <button
          aria-label="close details"
          aria-controls="image-details"
          className={styles.backdrop}
          onClick={handleOnDetails}
          type="button"
        />
        <Details
          image={data.image}
          onCollection={handleOnCollection}
        />
      </div>
      <button
        aria-label="toggle details"
        aria-expanded={isRenderingDetails}
        aria-controls="image-details"
        className={styles.details(size !== 'full')}
        onClick={handleOnDetails}
        type="button"
      >
        <Plus className={styles.plus(isRenderingDetails)} /> Details
      </button>
    </>
  );
}

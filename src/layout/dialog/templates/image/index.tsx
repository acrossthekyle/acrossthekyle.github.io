'use client';

import { X } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import { useDialog } from '@/hooks/useDialog';
import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  data?: {
    image?: Data;
    uuid: string;
  };
};

export default function Template({ data }: Props) {
  const { onClose } = useDialog();

  if (!data?.image) {
    return null;
  }

  return (
    <>
      <div className={styles.desktop}>
        <figure className={styles.figure}>
          <Ui.Image
            className={styles.image}
            size="large"
            src={data.image.src}
            thumb={data.image.thumb}
          />
        </figure>
      </div>
      <div className={styles.mobile}>
        <TransformWrapper
          doubleClick={{
            disabled: true,
          }}
          wheel={{
            wheelDisabled: true,
          }}
          key={data.uuid}
        >
          <TransformComponent>
            <figure className={styles.figure}>
              <Ui.Image
                className={styles.image}
                size="large"
                src={data.image.src}
                thumb={data.image.thumb}
              />
            </figure>
          </TransformComponent>
          <button className={styles.close} onKeyDown={onClose} onClick={onClose} type="button">
            <X aria-hidden="true" className={styles.icon} />
          </button>
        </TransformWrapper>
      </div>
    </>
  );
}

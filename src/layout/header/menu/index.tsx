'use client';

import { TextAlignEnd as Icon } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';
import { Image } from '@/ui/image';

import Navigation from '../navigation';
import Theme from '../theme';

import styles from './stylesheet';

type Props = {
  route?: string;
};

export default function Menu({ route }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="nav"
        aria-label="open menu dialog"
        className={styles.open}
        onClick={handleOnOpen}
        type="button"
      >
        <Icon className={styles.icon} />
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        ref={dialog}
      >
        <DialogHeader>
          <DialogClose
            id="menu"
            onClose={handleOnClose}
          />
          <button
            aria-controls="menu"
            aria-label="exit menu"
            className={styles.anchor}
            onClick={handleOnClose}
            type="button"
          >
            <Image
              alt=""
              height={540}
              sizes="100vw"
              src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
              width={960}
            />
          </button>
        </DialogHeader>
        <DialogBody>
          <nav aria-label="main navigation">
            <Navigation className={styles.list} route={route} />
          </nav>
          <Theme className={styles.theme} />
        </DialogBody>
        <DialogFooter />
      </Dialog>
    </>
  );
}

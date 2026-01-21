'use client';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';

import Button from '../button';
import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
  sortBy: string;
};

export default function Order({ current, onClick, sortBy }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <div className={styles.container}>
      <Button aria-label="open list order dialog" onClick={handleOnOpen}>
        {current}
      </Button>
      <Dialog
        id="order"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2>
            <strong>Order</strong>
            <small>
              Descending or ascending
            </small>
          </h2>
          <DialogClose id="order" onClose={handleOnClose} />
        </DialogHeader>
        <ul className={styles.list}>
          <li>
            <Cta
              count={sortBy === 'date' ? 'Newest to oldest' : 'Z to A'}
              current={current}
              expected="descending"
              label="Descending"
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              count={sortBy === 'date' ? 'Oldest to newest' : 'A to Z'}
              current={current}
              expected="ascending"
              label="Ascending"
              onClick={onClick}
            />
          </li>
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

'use client';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';

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
      <button aria-label="open list order dialog" onClick={handleOnOpen} type="button">
        <u><em>{current}</em></u>
      </button>
      <Dialog
        id="order"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2>
            <strong>Order by</strong>
            <small>Ascending or descending</small>
          </h2>
          <DialogClose id="order" onClose={handleOnClose} />
        </DialogHeader>
        <ul>
          <li>
            <Cta
              current={current}
              expected="descending"
              label={sortBy === 'date' ? 'oldest to newest' : 'z to a'}
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              current={current}
              expected="ascending"
              label={sortBy === 'date' ? 'newest to oldest' : 'a to z'}
              onClick={onClick}
            />
          </li>
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

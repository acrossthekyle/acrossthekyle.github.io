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
  orderBy: string;
};

export default function Sort({ current, onClick, orderBy}: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <div className={styles.container}>
      <button onClick={handleOnOpen} type="button">
        <u><em>{current}</em></u>
      </button>
      <Dialog
        id="sort"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2>
            <strong>Sort by</strong>
            <small>Date or title</small>
          </h2>
          <DialogClose id="sort" onClose={handleOnClose} />
        </DialogHeader>
        <ul>
          <li>
            <Cta
              current={current}
              expected="date"
              label={orderBy === 'descending' ? 'newest to oldest' : 'oldest to newest'}
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              current={current}
              expected="title"
              label={orderBy === 'descending' ? 'z to a' : 'a to z'}
              onClick={onClick}
            />
          </li>
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

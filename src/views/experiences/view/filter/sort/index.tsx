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
    <div aria-label="open list sort dialog" className={styles.container}>
      <Button onClick={handleOnOpen}>
        {current}
      </Button>
      <Dialog
        id="sort"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2>
            <strong>Sort</strong>
            <small>Date or alphabetically</small>
          </h2>
          <DialogClose id="sort" onClose={handleOnClose} />
        </DialogHeader>
        <ul className={styles.list}>
          <li>
            <Cta
              count={orderBy === 'descending' ? 'Newest to oldest' : 'Oldest to newest'}
              current={current}
              expected="date"
              label="Date"
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              count={orderBy === 'descending' ? 'Z to A' : 'A to Z'}
              current={current}
              expected="title"
              label="Alphabetically"
              onClick={onClick}
            />
          </li>
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

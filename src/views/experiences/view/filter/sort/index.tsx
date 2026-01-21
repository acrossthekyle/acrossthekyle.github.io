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
            <strong>Sort by</strong>
            <small>Date or title</small>
          </h2>
          <DialogClose id="sort" onClose={handleOnClose} />
        </DialogHeader>
        <ul className={styles.list}>
          <li>
            <Cta
              current={current}
              expected="date"
              label={orderBy === 'descending' ? 'Newest to oldest' : 'Oldest to newest'}
              onClick={onClick}
            />
          </li>
          <li>
            <Cta
              current={current}
              expected="title"
              label={orderBy === 'descending' ? 'Z to A' : 'A to Z'}
              onClick={onClick}
            />
          </li>
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

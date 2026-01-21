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
  options: Array<{ value: string; count: number; }>;
  onClick: (value: string) => void;
};

export default function Type({ current, options, onClick }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <div className={styles.container}>
      <Button aria-label="open list filter dialog" onClick={handleOnOpen}>
        {current}{current === 'everything' ? '' : 's'}
      </Button>
      <Dialog
        id="filter"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2>
            <strong>Filter</strong>
            <small>Category</small>
          </h2>
          <DialogClose id="filter" onClose={handleOnClose} />
        </DialogHeader>
        <ul className={styles.list}>
          <li>
            <Cta
              count={20}
              current={current}
              expected="everything"
              onClick={onClick}
            />
          </li>
          {options.map(({ count, value }) => (
            <li key={value}>
              <Cta
                count={count}
                current={current}
                expected={value}
                onClick={onClick}
              />
            </li>
          ))}
        </ul>
        <DialogFooter />
      </Dialog>
    </div>
  );
}

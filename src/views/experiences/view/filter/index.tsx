'use client';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';

import type { Data } from '../types';

import { useModel } from './model';

import Order from './order';
import Sort from './sort';
import styles from './stylesheet';
import Type from './type';

type Props = {
  data: Data[];
  onChange: (filter: string, sort: string, order: string) => void;
};

export default function Filter({ data, onChange }: Props) {
  const {
    filterBy,
    handleOnFilter,
    handleOnOrder,
    handleOnSort,
    orderBy,
    sortBy,
    types,
  } = useModel(data, onChange);

  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <section aria-label="filter and sort">
        Currently viewing{' '}
        <button onClick={handleOnOpen} type="button">
          <u>{filterBy}</u>
        </button>{' '}
        by {sortBy} in {orderBy} order.
        <Dialog
          id="filter"
          isOpen={isOpen}
          ref={dialog}
          onCancel={handleOnCancel}
        >
          <DialogHeader>
            <h2>
              <strong>Filter</strong>
              <small>Currently viewing {filterBy} by {sortBy} in {orderBy} order.</small>
            </h2>
            <DialogClose id="filter" onClose={handleOnClose} />
          </DialogHeader>
          <section className={styles.section}>
            <h3>
              <strong>Category</strong>
            </h3>
            <Type
              current={filterBy}
              options={types}
              onClick={handleOnFilter}
            />
          </section>
          <section className={styles.section}>
            <h3>
              <strong>Sort by</strong>
            </h3>
            <Sort
              current={sortBy}
              onClick={handleOnSort}
            />
          </section>
          <section className={styles.section}>
            <h3>
              <strong>Order</strong>
            </h3>
            <Order
              current={orderBy}
              onClick={handleOnOrder}
              sortBy={sortBy}
            />
          </section>
          <DialogFooter />
        </Dialog>
    </section>
  );
}

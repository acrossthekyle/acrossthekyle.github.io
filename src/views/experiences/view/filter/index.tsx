'use client';

import type { Data } from '../types';

import { useModel } from './model';

import Order from './order';
import Sort from './sort';
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

  return (
    <section aria-label="search and filter">
        Currently viewing{' '}
        <Type
          current={filterBy}
          options={types}
          onClick={handleOnFilter}
        />{' '}
        sorted by{' '}
        <Sort
          current={sortBy}
          onClick={handleOnSort}
          orderBy={orderBy}
        />, in{' '}
        <Order
          current={orderBy}
          onClick={handleOnOrder}
          sortBy={sortBy}
        />{' '}
        order.
    </section>
  );
}

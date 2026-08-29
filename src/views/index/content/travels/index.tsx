'use client';

import tw from '@/styles';
import type { Travel } from '@/types';

import Filter from './filter';
import Items from './items';
import { useModel } from './model';

type Props = {
  travels: Travel[];
};

export default function Travels({ travels }: Props) {
  const { filterBy, handleOnFilter } = useModel();

  return (
    <article className={styles.container} id="travels">
      <h2 className={styles.heading}>Travels</h2>
      <Filter filterBy={filterBy} onChange={handleOnFilter} />
      <Items filterBy={filterBy} travels={travels} />
    </article>
  );
};

const styles = tw({
  container: `
    relative
    p-6
    border-y border-current/12.5
  `,
  heading: `
    flex items-start
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
  `,
});

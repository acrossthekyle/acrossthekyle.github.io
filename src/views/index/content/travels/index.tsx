'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import tw from '@/styles';
import type { Travel } from '@/types';

import Filters from './filters';
import Items from './items';

type Props = {
  travels: Travel[];
};

export default function Travels({ travels }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filterBy, setFilterBy] = useState<string>(() => {
    return searchParams.get('filter') || 'all';
  });

  const handleChange = (value: string) => {
    setFilterBy(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', value);
    }

    const query = params.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    router.push(path, {
      scroll: false,
    });
  };

  return (
    <article className={styles.container} id="travels">
      <h2 className={styles.heading}>Travels</h2>
      <Filters filterBy={filterBy} onChange={handleChange} />
      <Items filterBy={filterBy} travels={travels} />
    </article>
  );
};

const styles = tw({
  container: `
    relative
    p-6
    border-b border-current/12.5
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

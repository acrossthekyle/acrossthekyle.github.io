'use client';

import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useState } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

export function useModel() {
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('query') || '');

  const hasQueryParameter = searchParams.has('query');

  const handleRedirect = (value: string) => {
    redirect(!!value ? `/?query=${value.trim()}` : '/');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnChangeDebounce = useCallback(debounce((value: string) => {
    handleRedirect(value);
  }, 300), []);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    setQuery(value);

    handleOnChangeDebounce(value);

    if (hasQueryParameter && value === '') {
      redirect('/');
    }
  };

  return {
    handleOnChange,
    query,
  };
}

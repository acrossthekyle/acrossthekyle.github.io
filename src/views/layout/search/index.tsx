import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useState } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

import { Search } from './icons';
import styles from './stylesheet';

export default function Component() {
  const searchParams = useSearchParams();

  const hasQueryParameter = searchParams.has('query');

  const [query, setQuery] = useState(searchParams.get('query') || '');

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

  const handleOnSubmit = () => {
    handleRedirect(query);
  };

  return (
    <div className={styles.search}>
      <input
        autoComplete="off"
        className={styles.input}
        onChange={handleOnChange}
        placeholder="Search trips"
        name="search"
        type="text"
        value={query}
      />
      <button
        className={styles.submit}
        onClick={handleOnSubmit}
        type="button"
      >
        <Search className={styles.icon} />
      </button>
    </div>
  );
}

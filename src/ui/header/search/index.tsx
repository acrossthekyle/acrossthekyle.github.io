'use client';

import { Search as Icon } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  onChange: (searchBy: string) => void;
  placeholder?: string;
  searchBy: string;
};

export default function Search({
  children,
  onChange,
  placeholder,
  searchBy,
}: Props) {
  const { handleOnSearch } = useModel(onChange);

  return (
    <form
      className={styles.container}
      onSubmit={event => event.preventDefault()}
    >
      <fieldset className={styles.search}>
        <Icon aria-hidden="true" className={styles.icon} />
        <input
          className={styles.input}
          onChange={handleOnSearch}
          placeholder={`Search ${placeholder || ''}`.trim()}
          type="text"
          value={searchBy}
        />
      </fieldset>
      {children}
    </form>
  );
}

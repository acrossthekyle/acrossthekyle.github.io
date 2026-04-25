'use client';

import { useFilter } from '@/hooks/useFilter';

import styles from './stylesheet';

type Props = {
  id: string;
  onClick: () => void;
};

export default function Link({
  children,
  id,
  onClick,
}: React.PropsWithChildren<Props>) {
  const { onFilter } = useFilter();

  const handleOnClick = () => {
    onFilter('album', id);

    onClick();
  };

  return (
    <button
      aria-label="view album"
      className={styles.container}
      onClick={handleOnClick}
      type="button"
    >
      {children}
    </button>
  );
}

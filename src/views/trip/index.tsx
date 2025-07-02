'use client';

import Content from './content';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  id: string;
};

export default function View({ id }: Props) {
  const {
    isLoading,
    trip,
  } = useModel(id);

  if (isLoading || trip === null) {
    return (
      <div className={`${styles.container} ${styles.pulse}`}>
        <div className={styles.skeleton} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Content trip={trip} />
    </div>
  );
}

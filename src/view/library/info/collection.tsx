import type { Collection } from '@/types';

import styles from './stylesheet';

type Props = {
  collection: Collection | null;
};

export default function Collection({ collection }: Props) {
  if (collection === null) {
    return null;
  }

  return (
    <h1 className={styles.header}>
      {collection.title}
      <small className={styles.subheader}>
        {collection.location !== null ? (
          <>{collection.location.country}, {collection.location.continent}</>
        ) : (
          <>Various locations</>
        )}
        <span className={styles.divider}>•</span>
        {collection.count} Photos
      </small>
    </h1>
  );
}

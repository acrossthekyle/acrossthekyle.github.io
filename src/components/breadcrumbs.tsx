import Link from 'next/link';

import Images from '@/images';
import styles from '@/styles/components/breadcrumbs.module.scss';
import type { Breadcrumb } from '@/types';

type Props = {
  className?: string;
  items: Breadcrumb[];
};

function Breadcrumbs({ className = '', items }: Props) {
  return (
    <ul
      aria-label="Breadcrumbs"
      className={`${styles.breadcrumbs} ${className}`.trim()}
      role="navigation"
    >
      {items.map(({ text, uri }) => (
        <li className={styles.breadcrumb} key={`${text}-${uri}`}>
          {uri && (
            <Link href={uri}>
              <span>{text}</span>
            </Link>
          )}
          {!uri && <span>{text}</span>}
          <span className={styles.divider} aria-hidden="true">
            <Images.Icons.Arrow right />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

import Link from 'next/link';

import styles from '@/styles/ui/breadcrumbs.module.scss';
import { Breadcrumb } from '@/types/breadcrumb';

import ArrowIcon from './icons/arrow';

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
        <li className={styles.breadcrumb} key={text}>
          {uri && (
            <Link href={uri}>
              <span>{text}</span>
            </Link>
          )}
          {!uri && <span>{text}</span>}
          <span className={styles.divider} aria-hidden="true">
            <ArrowIcon right />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

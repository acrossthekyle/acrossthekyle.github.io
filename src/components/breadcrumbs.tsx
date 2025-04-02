import Link from 'next/link';

import Images from '@/images';
import styles from '@/styles/components/breadcrumbs.module.scss';
import type { Breadcrumb } from '@/types';

type Props = {
  className?: string;
  items: Breadcrumb[];
  shouldAlignCenter?: boolean;
};

function Breadcrumbs({
  className = '',
  items,
  shouldAlignCenter = true,
}: Props) {
  return (
    <ul
      aria-label="Breadcrumbs"
      className={`${styles.breadcrumbs} ${className}`.trim()}
      data-centered={shouldAlignCenter}
      role="navigation"
    >
      {items.map(({ text, uri }: Breadcrumb, index: number) => (
        <li className={styles.breadcrumb} key={`${text}-${uri}`}>
          {uri && (
            <Link href={uri}>
              {index === 0 && (
                <span aria-hidden="true" className={styles.back}>
                  <Images.Icons.Arrow left />
                </span>
              )}
              {text}
            </Link>
          )}
          {!uri && <span>{text}</span>}
          <span aria-hidden="true" className={styles.divider}>
            <Images.Icons.Arrow right />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

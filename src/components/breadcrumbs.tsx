import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';
import type { Components } from '@/types';

const scss = Styles.Components.Breadcrumbs;

type Props = {
  className?: string;
  items: Components.Breadcrumb[];
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
      className={`${scss.breadcrumbs} ${className}`.trim()}
      data-centered={shouldAlignCenter}
      role="navigation"
    >
      {items.map(({ text, uri }: Components.Breadcrumb, index: number) => (
        <li className={scss.breadcrumb} key={`${text}-${uri}`}>
          {uri && (
            <Link href={uri}>
              {index === 0 && (
                <span aria-hidden="true" className={scss.back}>
                  <Images.Icons.Arrow left />
                </span>
              )}
              {text}
            </Link>
          )}
          {!uri && <span>{text}</span>}
          <span aria-hidden="true" className={scss.divider}>
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;

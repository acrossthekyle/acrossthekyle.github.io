import Link from 'next/link';

import Styles from '@/styles';
import type { Packs } from '@/types';

const scss = Styles.Components.Packs.Aside;

type Props = {
  activeId?: string;
  packs: Packs.Pack[];
};

function Component({ activeId, packs }: Props) {
  return (
    <aside className={scss.aside}>
      <input id="toggle" className={scss.toggle} type="checkbox" />
      <label
        aria-label="Toggle packs list"
        htmlFor="toggle"
        className={scss.label}
      />
      <div className={scss.packs}>
        <ul>
          {(packs || []).map((pack) => (
            <li className={scss.pack} key={pack.id}>
              <Link
                className={scss.link}
                data-active={activeId === pack.id}
                href={`/packs/${pack.id}`}
              >
                <div className={scss.header}>{pack.title}</div>
                <div className={scss.type}>{pack.type}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Component;

import Link from 'next/link';

import styles from '@/styles/pages/packs/pack.module.scss';
import type { Pack } from '@/types/packs';
import Button from '@/ui/button';

import { getUnitsLabelForGroup } from '../../utils';

type Props = {
  active?: string;
  className?: string;
  onClick;
  packs?: Pack[];
  units: string;
};

function Packs({ active = '', className = '', onClick, packs, units }: Props) {
  return (
    <ul className={`${styles.packs} ${className}`.trim()}>
      {(packs || []).map(({ slug, title, type, weightTotal }) => (
        <li className={styles.pack} key={slug}>
          <Link
            className={styles.link}
            data-active={active === slug}
            href={`${slug}?units=${units}`}
            onClick={onClick}
          >
            <p className={styles.header}>{title}</p>
            <p className={styles.type}>{type}</p>
            <p className={styles.weight}>
              {weightTotal} {getUnitsLabelForGroup(units)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Packs;

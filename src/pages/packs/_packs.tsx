import Link from 'next/link';

import styles from '@/styles/pages/packs/packs.module.scss';
import type { Pack } from '@/types/packs';
import Button from '@/ui/button';
import { convertGroupWeight, getUnitsLabelForGroup } from '@/utils/units';

type Props = {
  active?: string;
  className?: string;
  onClick: (pack: Pack) => void;
  packs?: Pack[];
  units: string;
};

function Packs({ active = '', className = '', onClick, packs, units }: Props) {
  return (
    <div className={`${styles.packs} ${className}`.trim()}>
      <ul>
        {(packs || []).map((pack) => (
          <li className={styles.pack} key={pack.slug}>
            <button
              className={styles.link}
              data-active={active === pack.slug}
              onClick={() => onClick(pack)}
              type="button"
            >
              <p className={styles.header}>{pack.title}</p>
              <p className={styles.type}>{pack.type}</p>
              <p className={styles.weight}>
                {convertGroupWeight(pack.weightTotal, units)}&nbsp;
                {getUnitsLabelForGroup(units)}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Packs;

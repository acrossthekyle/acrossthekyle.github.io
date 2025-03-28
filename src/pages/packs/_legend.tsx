'use client';

import styles from '@/styles/pages/packs/pack.module.scss';
import type { PackCategory } from '@/types/packs';

import { CATEGORY_COLORS } from '../../constants';
import { getUnitsLabelForGroup } from '../../utils';

type Props = {
  categories?: PackCategory[];
  hoveredCategory: string;
  onClick: (category: string) => void;
  units: string;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

function Legend({
  categories,
  hoveredCategory,
  onClick,
  units,
  weightBase,
  weightConsumable,
  weightTotal,
  weightWorn,
}: Props) {
  const unitsLabel = getUnitsLabelForGroup(units);

  return (
    <div className={styles.legend}>
      <ul>
        <li className={styles.header}>
          <span>Category</span>
          <span>Weight <small>{unitsLabel}</small></span>
        </li>
        {(categories || []).map(({ category, weight }, index: number) => (
          <li
            data-active={hoveredCategory === category}
            key={category}
          >
            <span style={{ backgroundColor: CATEGORY_COLORS[index] }} />
            <button
              onClick={() => onClick(category)}
              type="button"
            >
              {category}
            </button>
            <div>{weight} <small>{unitsLabel}</small></div>
          </li>
        ))}
        <li className={`${styles.total} ${styles.bordered}`}>
          <span>Total</span>
          <span>{weightTotal} <small>{unitsLabel}</small></span>
        </li>
        <li className={styles.total}>
          <span>Consumable</span>
          <span>{weightConsumable} <small>{unitsLabel}</small></span>
        </li>
        <li className={styles.total}>
          <span>Worn</span>
          <span>{weightWorn} <small>{unitsLabel}</small></span>
        </li>
        <li className={styles.total}>
          <span>Base</span>
          <span>{weightBase} <small>{unitsLabel}</small></span>
        </li>
      </ul>
    </div>
  );
}

export default Legend;
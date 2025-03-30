'use client';

import { CHART_CATEGORY_COLORS } from '@/constants/charts';
import styles from '@/styles/pages/packs/pack.module.scss';
import type { PackCategory } from '@/types/packs';
import { convertGroupWeight, getUnitsLabelForGroup } from '@/utils/units';

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
          <span>
            Weight <small>{unitsLabel}</small>
          </span>
        </li>
        {(categories || []).map(({ category, weight }, index: number) => (
          <li data-active={hoveredCategory === category} key={category}>
            <span style={{ backgroundColor: CHART_CATEGORY_COLORS[index] }} />
            <button onClick={() => onClick(category)} type="button">
              {category}
            </button>
            <div>
              {convertGroupWeight(weight, units)} <small>{unitsLabel}</small>
            </div>
          </li>
        ))}
        <li className={`${styles.total} ${styles.bordered}`}>
          <span>Total</span>
          <span>
            {convertGroupWeight(weightTotal, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Consumable</span>
          <span>
            {convertGroupWeight(weightConsumable, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Worn</span>
          <span>
            {convertGroupWeight(weightWorn, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Base</span>
          <span>
            {convertGroupWeight(weightBase, units)} <small>{unitsLabel}</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Legend;

'use client';

import Constants from '@/constants';
import styles from '@/styles/components/packs/legend.module.scss';
import type { PackCategory } from '@/types';
import Utils from '@/utils';

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
  const unitsLabel = Utils.getUnitsLabelForGroup(units);

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
            <span style={{ backgroundColor: Constants.CATEGORY_COLORS[index] }} />
            <button onClick={() => onClick(category)} type="button">
              {category}
            </button>
            <div>
              {Utils.convertGroupWeight(weight, units)} <small>{unitsLabel}</small>
            </div>
          </li>
        ))}
        <li className={`${styles.total} ${styles.bordered}`}>
          <span>Total</span>
          <span>
            {Utils.convertGroupWeight(weightTotal, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Consumable</span>
          <span>
            {Utils.convertGroupWeight(weightConsumable, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Worn</span>
          <span>
            {Utils.convertGroupWeight(weightWorn, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={styles.total}>
          <span>Base</span>
          <span>
            {Utils.convertGroupWeight(weightBase, units)} <small>{unitsLabel}</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Legend;

import type { GearCategory } from '@/types';

import Icon from '../icon';
import { useModel } from './model';
import styles from './stylesheet';
import Toggle from './toggle';

type Props = {
  categories: GearCategory[],
  index: number | null;
  onSelect: (index: number | null) => void;
  weightTotal: string;
};

export default function Categories({
  categories,
  index,
  onSelect,
  weightTotal,
}: Props) {
  const { handleOnToggle, isOpen } = useModel();

  return (
    <div className={styles.container(isOpen)}>
      <Toggle
        categories={categories}
        index={index}
        isOpen={isOpen}
        onClick={handleOnToggle}
        weightTotal={weightTotal}
      />
      <ul className={styles.categories(isOpen)}>
        <li className={styles.category}>
          <button
            className={styles.cta}
            onClick={() => {
              handleOnToggle();
              onSelect(null);
            }}
            type="button"
          >
            <Icon category="all" className={styles.icon} />
            <span className={styles.heading}>
              All Categories
            </span>
            <span className={styles.right}>
              {weightTotal} <small>lbs</small>
            </span>
          </button>
        </li>
        {categories.map(({ category, items, weight }, position: number) => (
          <li className={styles.category} key={category}>
            <button
              className={styles.cta}
              onClick={() => {
                handleOnToggle();
                onSelect(position);
              }}
              type="button"
            >
              <Icon category={category} className={styles.icon} />
              <span className={styles.heading}>
                {category}
                <span className={styles.count}>{items.length} Items</span>
              </span>
              <span className={styles.right}>
                {weight} <small>lbs</small>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

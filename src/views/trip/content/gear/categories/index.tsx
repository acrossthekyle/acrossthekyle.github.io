import { ChevronDown, ChevronUp } from 'lucide-react';

import { type GearCategory } from '../../../types';
import Icon from '../icon';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  categories: GearCategory[],
  onSelect: (selection: string | null, selectionIndex: number | null) => void;
  selection: string | null;
  selectionIndex: number | null;
  weightTotal: string;
};

export default function Categories({
  categories,
  onSelect,
  selection,
  selectionIndex,
  weightTotal,
}: Props) {
  const {
    handleOnToggle,
    isOpen,
  } = useModel();

  return (
    <div className={styles.container(isOpen)}>
      <button
        className={styles.toggle}
        onClick={handleOnToggle}
        type="button"
      >
        {(selection === null || selectionIndex === null) ? (
          <>
            <Icon category="all" className={styles.icon} />
            All Categories
            <span className={styles.weight}>
              {weightTotal} <small>lbs</small>
            </span>
          </>
        ) : (
          <>
            <Icon category={selection} className={styles.icon} />
            {selection}
            <span className={styles.weight}>
              {categories[selectionIndex].weight} <small>lbs</small>
            </span>
          </>
        )}
        {isOpen ? (
          <ChevronUp className={styles.chevron} />
        ) : (
          <ChevronDown className={styles.chevron} />
        )}
      </button>
      <ul className={styles.categories(isOpen)}>
        <li className={styles.category}>
          <button
            className={styles.cta}
            onClick={() => {
              handleOnToggle();

              onSelect(null, null);
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
        {categories.map(({ category, items, weight }, index) => (
          <li className={styles.category} key={index}>
            <button
              className={styles.cta}
              onClick={() => {
                handleOnToggle();

                onSelect(category, index);
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

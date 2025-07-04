import { ChevronDown, ChevronUp } from 'lucide-react';

import type { GearCategory } from '@/types';

import Icon from '../../icon';

import styles from './stylesheet';

type Props = {
  categories: GearCategory[],
  index: number | null;
  isOpen: boolean;
  onClick: () => void;
  weightTotal: string;
};

export default function Toggle({
  categories,
  index,
  isOpen,
  onClick,
  weightTotal,
}: Props) {
  const name = index === null ? 'All Categories' : categories[index].category;
  const weight = index === null ? weightTotal : categories[index].weight;

  return (
    <button
      className={styles.toggle}
      onClick={onClick}
      type="button"
    >
      <Icon category={index === null ? 'all' : name} className={styles.icon} />
      {name}
      <span className={styles.weight}>
        {weight} <small>lbs</small>
      </span>

      {isOpen ? (
        <ChevronUp className={styles.chevron} />
      ) : (
        <ChevronDown className={styles.chevron} />
      )}
    </button>
  );
}

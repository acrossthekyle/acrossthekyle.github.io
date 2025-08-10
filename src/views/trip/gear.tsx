'use client';

import { ArrowLeft, X } from 'lucide-react';

import type { Trip } from '@/types';

import { useModel } from './gear.model';
import styles from './gear.stylesheet';

type Props = {
  onClose: () => void;
  trip: Trip;
};

type ItemProps = {
  name: string[];
  weight: number;
};

function Item({ name, weight }: ItemProps) {
  return (
    <>
      <span className={styles.name}>
        {name.map((part: string) => (
          <span className={styles.part} key={part}>{part}</span>
        ))}
      </span>
      <span className={styles.weight}>
        {weight}<small>oz</small>
      </span>
    </>
  );
}

export default function Gear({ onClose, trip }: Props) {
  const { activeIndex, handleOnBack, handleOnCategory, isOnCategory } = useModel();

  if (trip.gear === null) {
    return null;
  }

  return (
    <>
      <button
        className={styles.close(isOnCategory)}
        onClick={onClose}
        type="button"
      >
        <X className={styles.x} />
      </button>
      <button
        className={styles.back(isOnCategory)}
        onClick={handleOnBack}
        type="button"
      >
        <ArrowLeft className={styles.x} />
      </button>
      <ul className={styles.stats(isOnCategory)}>
        <li className={styles.stat}>
          {trip.gear.weightBase} <small>lbs</small>
          <span className={styles.label}>Base Weight</span>
        </li>
        <li className={styles.stat}>
          {trip.gear.weightConsumable} <small>lbs</small>
          <span className={styles.label}>Consumable Weight</span>
        </li>
        <li className={styles.stat}>
          {trip.gear.weightWorn} <small>lbs</small>
          <span className={styles.label}>Worn Weight</span>
        </li>
        <li className={styles.stat}>
          {trip.gear.weightTotal} <small>lbs</small>
          <span className={styles.label}>Total Weight</span>
        </li>
      </ul>
      <ul className={styles.categories(isOnCategory)}>
        {trip.gear.categories.map((category, index: number) => (
          <li
            className={styles.category}
            key={category.category}
            style={{ animationDelay: `${0.1 + (index * 0.025)}s` }}
          >
            <button
              className={styles.link(isOnCategory, activeIndex === index)}
              onClick={() => handleOnCategory(index)}
              type="button"
            >
              {category.category}
            </button>
          </li>
        ))}
      </ul>
      {isOnCategory && (
        <section className={styles.list}>
          <ul className={styles.items}>
            {trip.gear.categories[activeIndex].items.map((item, index: number) => (
              <li key={index}>
                {item.link ? (
                  <a
                    className={styles.item(true)}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Item name={item.name} weight={item.weight} />
                  </a>
                ) : (
                  <div className={styles.item(false)}>
                    <Item name={item.name} weight={item.weight} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

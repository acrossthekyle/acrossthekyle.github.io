'use client';

import { X } from 'lucide-react';

import type { Trip } from '@/types';

import { useModel } from './gear.model';
import styles from './gear.stylesheet';

type Props = {
  onClose: () => void;
  trip: Trip;
};

export default function Gear({ onClose, trip }: Props) {
  const { activeIndex, handleOnCategory, isOnCategory } = useModel();

  if (trip.gear === null) {
    return null;
  }

  return (
    <>
      <button
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        <X />
      </button>
      <ul className={styles.stats(activeIndex === -1)}>
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
      <ul className={styles.categories}>
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
      {activeIndex > -1 && (
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
                    <span className={styles.name}>{item.name} {item.type}</span>
                    <span className={styles.weight}>
                      {item.weight}
                      <small>oz</small>
                    </span>
                  </a>
                ) : (
                  <div className={styles.item(false)}>
                    <span className={styles.name}>{item.name} {item.type}</span>
                    <span className={styles.weight}>
                      {item.weight}
                      <small>oz</small>
                    </span>
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

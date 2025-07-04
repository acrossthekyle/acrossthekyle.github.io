import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { useView } from '@/hooks/useView';
import { type Trip, Overlay } from '@/types';

import Components from '../components';

import Categories from './categories';
import Icon from './icon';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  trip: Trip;
};

export default function Gear({ trip }: Props) {
  const { handleOnSelect, index } = useModel();

  const { overlay, shift } = useView();

  if (!trip.hasGear) {
    return null;
  }

  if (!trip.gear) {
    return null;
  }

  return (
    <Components.Panel
      isActive={overlay === Overlay.Gear}
      onClose={() => shift(Overlay.None)}
    >
      <h3 className={styles.header}>
        Gear
        <span className={styles.base}>
          {trip.gear.weightBase} lbs Base weight
        </span>
      </h3>
      <button
        className={styles.close}
        onClick={() => shift(Overlay.None)}
        type="button"
      >
        <ArrowLeft className={styles.arrow} />
      </button>
      <Categories
        categories={trip.gear.categories}
        onSelect={handleOnSelect}
        index={index}
        weightTotal={trip.gear.weightTotal}
      />
      <div className={styles.categories}>
        <ul className={styles.category}>
          {(
            index !== null ?
              [trip.gear.categories[index]] :
              trip.gear.categories
            ).map((category) => (
              <li className={styles.inner} key={category.category}>
                {index === null && (
                  <h3 className={styles.heading}>
                    <Icon
                      category={category.category}
                      className={styles.icon}
                    />
                    {category.category}
                    <span className={styles.weight}>
                      {category.weight} <small>lbs</small>
                    </span>
                  </h3>
                )}

                <ul className={styles.items}>
                  {category.items.map((item, index) => (
                    <li className={styles.item} key={index}>
                      {!!item.link ? (
                        <Link
                          className={styles.link}
                          href={item.link}
                          target="_blank"
                        >{`${item.name} ${item.type}`.trim()}</Link>
                      ) : (
                        <>{`${item.name} ${item.type}`.trim()}</>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </Components.Panel>
  );
}

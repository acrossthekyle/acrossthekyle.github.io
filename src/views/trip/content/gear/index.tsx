import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { type Gear } from '../../types';
import Categories from './categories';
import Icon from './icon';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  gear: Gear;
  isActive: boolean;
  onToggle: () => void;
};

export default function Gear({ gear, isActive, onToggle }: Props) {
  const {
    handleOnSelect,
    selection,
    selectionIndex,
  } = useModel();

  return (
    <div className={styles.container(isActive)}>
      <button
        className={styles.backdrop(isActive)}
        onClick={onToggle}
        type="button"
      />
      <div className={styles.scrollable(isActive)}>
        <h3 className={styles.header}>
          Gear
          <span className={styles.base}>
            {gear.weightBase} lbs Base weight
          </span>
        </h3>
        <button
          className={styles.close}
          onClick={onToggle}
          type="button"
        >
          <ArrowLeft className={styles.arrow} />
        </button>
        <Categories
          categories={gear.categories}
          onSelect={handleOnSelect}
          selection={selection}
          selectionIndex={selectionIndex}
          weightTotal={gear.weightTotal}
        />
        <div className={styles.categories}>
          <ul className={styles.category}>
            {(
              selectionIndex !== null ?
                [gear.categories[selectionIndex]] :
                gear.categories
              ).map((category) => (
                <li className={styles.inner} key={category.category}>
                  {!selection && (
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
      </div>
    </div>
  );
}

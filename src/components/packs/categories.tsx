import Link from 'next/link';

import Constants from '@/constants';
import Images from '@/images';
import styles from '@/styles/components/packs/categories.module.scss';
import type { PackCategory } from '@/types';
import Utils from '@/utils';

type Props = {
  categories?: PackCategory[];
  units: string;
};

function Categories({ categories, units }: Props) {
  return (
    <div className={styles.categories}>
      {(categories || []).map((category, categoryIndex: number) => (
        <div className={styles.list} key={category.category}>
          <h3 id={category.category}>{category.category}</h3>
          <span
            aria-hidden="true"
            className={styles.color}
            style={{
              backgroundColor: Constants.CATEGORY_COLORS[categoryIndex],
            }}
          />
          <ul className={styles.category}>
            {category.items.map(
              ({ link, name, type, weight }, itemIndex: number) => (
                <li className={styles.items} key={itemIndex}>
                  <div className={styles.text}>
                    <div className={styles.type}>
                      {type}
                      {!!link && (
                        <Link
                          className={styles.link}
                          href={link}
                          target="_blank"
                        >
                          <Images.Icons.Link />
                        </Link>
                      )}
                    </div>
                    <div className={styles.name}>{name}</div>
                  </div>
                  <div className={styles.weight}>
                    {Utils.convertItemWeight(weight, units)}{' '}
                    <small>{Utils.getUnitsLabelForItem(units)}</small>
                  </div>
                </li>
              ),
            )}
            <li className={styles.total}>
              <div className={styles.weight}>
                {Utils.convertGroupWeight(category.weight, units)}{' '}
                <small>{Utils.getUnitsLabelForGroup(units)}</small>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Categories;

import Link from 'next/link';

import { CHART_CATEGORY_COLORS } from '@/constants/charts';
import styles from '@/styles/pages/packs/pack.module.scss';
import type { PackCategory } from '@/types/packs';
import LinkIcon from '@/ui/icons/link';
import {
  convertGroupWeight,
  convertItemWeight,
  getUnitsLabelForGroup,
  getUnitsLabelForItem,
} from '@/utils/units';

type Props = {
  categories?: PackCategory[];
  units: string;
};

function Categories({ categories, units }: Props) {
  return (
    <div className={styles.lists}>
      {(categories || []).map((category, categoryIndex: number) => (
        <div className={styles.list} key={category.category}>
          <h3 id={category.category}>{category.category}</h3>
          <span
            aria-hidden="true"
            className={styles.color}
            style={{
              backgroundColor: CHART_CATEGORY_COLORS[categoryIndex],
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
                          <LinkIcon />
                        </Link>
                      )}
                    </div>
                    <div className={styles.name}>{name}</div>
                  </div>
                  <div className={styles.weight}>
                    {convertItemWeight(weight, units)}{' '}
                    <small>{getUnitsLabelForItem(units)}</small>
                  </div>
                </li>
              ),
            )}
            <li className={styles.total}>
              <div className={styles.weight}>
                {convertGroupWeight(category.weight, units)}{' '}
                <small>{getUnitsLabelForGroup(units)}</small>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Categories;

import Link from 'next/link';

import Constants from '@/constants';
import Images from '@/images';
import Styles from '@/styles';
import type { Packs } from '@/types';
import { Units } from '@/types/packs';
import Utils from '@/utils';

const scss = Styles.Pages.Packs.PageComponentCategories;

type Props = {
  categories?: Packs.Category[];
  units: Units;
};

function Component({ categories, units }: Props) {
  return (
    <div className={scss.categories}>
      {categories?.map((category: Packs.Category, categoryIndex: number) => (
        <div className={scss.list} key={category.category}>
          <h3 id={category.category}>{category.category}</h3>
          <span
            aria-hidden="true"
            className={scss.color}
            style={{
              backgroundColor: Constants.CATEGORY_COLORS[categoryIndex],
            }}
          />
          <ul className={scss.category}>
            {category.items.map(
              ({ consumable, link, name, type, weight, worn }, itemIndex) => (
                <li className={scss.items} key={itemIndex}>
                  <div className={scss.text}>
                    <div className={scss.type}>
                      {!!link ? (
                        <Link className={scss.link} href={link} target="_blank">
                          {type}
                        </Link>
                      ) : (
                        <>{type}</>
                      )}
                      {!!link && <Images.Icons.Link />}
                      {worn && (
                        <Images.Icons.Shirt
                          className={scss.worn}
                          title="Worn"
                        />
                      )}
                      {consumable && (
                        <Images.Icons.Utensils
                          className={scss.consumable}
                          title="Consumable"
                        />
                      )}
                    </div>
                    <div className={scss.name}>{name}</div>
                  </div>
                  <div className={scss.weight}>
                    {Utils.convertItemWeight(weight, units)}{' '}
                    <small>{Utils.getUnitsLabelForItem(units)}</small>
                  </div>
                </li>
              ),
            )}
            <li className={scss.total}>
              <div className={scss.weight}>
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

export default Component;

import Constants from '@/constants';
import Images from '@/images';
import Styles from '@/styles';
import type { Packs } from '@/types';
import { convertGroupWeight, getUnitsLabelForGroup } from '@/utils/packs';

const scss = Styles.Components.Packs.Legend;

type Props = {
  categories?: Packs.Category[];
  units: string;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

function Component({
  categories,
  units,
  weightBase,
  weightConsumable,
  weightTotal,
  weightWorn,
}: Props) {
  const unitsLabel = getUnitsLabelForGroup(units);

  return (
    <div className={scss.legend}>
      <ul>
        <li className={scss.header}>
          <span>Category</span>
          <span>
            Weight <small>{unitsLabel}</small>
          </span>
        </li>
        {categories?.map(
          ({ category, weight }: Packs.Category, index: number) => (
            <li key={category}>
              <span
                style={{ backgroundColor: Constants.CATEGORY_COLORS[index] }}
              />
              <span>{category}</span>
              <div>
                {convertGroupWeight(weight, units)} <small>{unitsLabel}</small>
              </div>
            </li>
          ),
        )}
        <li className={`${scss.total} ${scss.bordered}`}>
          <span>Total</span>
          <span>
            {convertGroupWeight(weightTotal, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>
            <Images.Icons.Utensils /> Consumable
          </span>
          <span>
            {convertGroupWeight(weightConsumable, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>
            <Images.Icons.Shirt /> Worn
          </span>
          <span>
            {convertGroupWeight(weightWorn, units)} <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>Base</span>
          <span>
            {convertGroupWeight(weightBase, units)} <small>{unitsLabel}</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Component;

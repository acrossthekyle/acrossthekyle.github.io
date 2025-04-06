import Constants from '@/constants';
import Styles from '@/styles';
import type { Packs } from '@/types';
import { Units } from '@/types/packs';
import Utils from '@/utils';

const scss = Styles.Pages.Packs.PageComponentLegend;

type Props = {
  categories?: Packs.Category[];
  hoveredCategory: string;
  onClick: (category: string) => void;
  units: Units;
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

function Component({
  categories,
  hoveredCategory,
  onClick,
  units,
  weightBase,
  weightConsumable,
  weightTotal,
  weightWorn,
}: Props) {
  const unitsLabel = Utils.getUnitsLabelForGroup(units);

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
            <li data-active={hoveredCategory === category} key={category}>
              <span
                style={{ backgroundColor: Constants.CATEGORY_COLORS[index] }}
              />
              <button onClick={() => onClick(category)} type="button">
                {category}
              </button>
              <div>
                {Utils.convertGroupWeight(weight, units)}{' '}
                <small>{unitsLabel}</small>
              </div>
            </li>
          ),
        )}
        <li className={`${scss.total} ${scss.bordered}`}>
          <span>Total</span>
          <span>
            {Utils.convertGroupWeight(weightTotal, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>Consumable</span>
          <span>
            {Utils.convertGroupWeight(weightConsumable, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>Worn</span>
          <span>
            {Utils.convertGroupWeight(weightWorn, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
        <li className={scss.total}>
          <span>Base</span>
          <span>
            {Utils.convertGroupWeight(weightBase, units)}{' '}
            <small>{unitsLabel}</small>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Component;

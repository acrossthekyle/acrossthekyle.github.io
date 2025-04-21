import Components from '@/components';
import Constants from '@/constants';
import Images from '@/images';
import Styles from '@/styles';
import type { Packs } from '@/types';
import { Units } from '@/types/packs';
import { getPacksFromCsvs } from '@/utils/files';
import {
  calculateBaseWeight,
  calculateConsumableWeight,
  calculateWeight,
  calculateWeightPerCategory,
  calculateWornWeight,
  groupByCategory,
} from '@/utils/packs';

const scss = Styles.Pages.Packs.Page;

export const getServerSideProps = async (request, response) => {
  const data = await getPacksFromCsvs();

  const packs: Packs.Pack[] = data.map(({ items, ...rest }) => {
    return {
      ...rest,
      categories: calculateWeightPerCategory(groupByCategory(items)),
      weightBase: calculateBaseWeight(items),
      weightConsumable: calculateConsumableWeight(items),
      weightTotal: calculateWeight(items),
      weightWorn: calculateWornWeight(items),
    };
  });

  const query = request?.query?.pack?.[0];

  const pack: Packs.Pack = packs.find((pack) => pack.id === query) || packs[0];

  const units: string =
    request?.query?.units === Units.Metric ? Units.Metric : Units.Imperial;

  return {
    props: {
      pack,
      packs,
      units,
      uri: request.resolvedUrl.split('?')[0] as unknown as string,
    },
  };
};

type Props = {
  pack: Packs.Pack;
  packs: Packs.Pack[];
  units: string;
  uri: string;
};

function Page({ pack, packs, units, uri }: Props) {
  return (
    <Components.View element="div" title="Packs">
      <h1 className={scss.heading}>Packs</h1>
      <Components.Packs.Units units={units} uri={uri} />
      <div className={scss.container}>
        <Components.Packs.Aside activeId={pack.id} packs={packs} />
        <main className={scss.main}>
          <h2 className={scss.heading} id="title">
            {pack.title}
          </h2>
          <div className={scss.wrapper}>
            <div className={scss.stats}>
              <Components.Packs.Chart
                categories={pack.categories}
                units={units}
              />
              <Components.Packs.Legend
                categories={pack.categories}
                units={units}
                weightBase={pack.weightBase}
                weightConsumable={pack.weightConsumable}
                weightTotal={pack.weightTotal}
                weightWorn={pack.weightWorn}
              />
            </div>
            <Components.Packs.Categories
              categories={pack.categories}
              units={units}
            />
          </div>
        </main>
      </div>
    </Components.View>
  );
}

export default Page;

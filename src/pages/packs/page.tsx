import Components from '@/components';
import Images from '@/images';
import Styles from '@/styles';

import Aside from './page.component.aside';
import Categories from './page.component.categories';
import Chart from './page.component.chart';
import Legend from './page.component.legend';
import Units from './page.component.units';
import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Packs.Page;

function Page() {
  const {
    canRenderPacks,
    handleOnChartClick,
    handleOnChartHover,
    handleOnLegendClick,
    handleOnPackClick,
    handleOnUnitsClick,
    handleOnViewAllPacksClick,
    handleOnViewStatsClick,
    hoveredCategory,
    isLoading,
    isReady,
    pack,
    packs,
    units,
  } = useViewModel();

  return (
    <Components.View element="div" title="Packs">
      <h1 className={scss.heading}>Packs</h1>
      <Units onClick={handleOnUnitsClick} units={units} />
      <div className={scss.container}>
        {isLoading && <Components.Loading />}
        {isReady && pack && (
          <>
            <Aside
              activeId={pack.slug}
              canBrowse={canRenderPacks}
              onPackClick={handleOnPackClick}
              onViewStatsClick={handleOnViewStatsClick}
              packs={packs}
            />
            <main className={scss.main} data-browse-packs={canRenderPacks}>
              <Components.Button
                className={scss.toggle}
                mode="secondary"
                onClick={handleOnViewAllPacksClick}
                text={
                  <>
                    <Images.Icons.Arrow left /> All packs
                  </>
                }
              />
              <h2 className={scss.heading} id="title">
                {pack.title}
              </h2>
              <div className={scss.wrapper}>
                <div className={scss.stats}>
                  <Chart
                    categories={pack.categories}
                    onClick={handleOnChartClick}
                    onHover={handleOnChartHover}
                    units={units}
                  />
                  <Legend
                    categories={pack.categories}
                    hoveredCategory={hoveredCategory}
                    onClick={handleOnLegendClick}
                    units={units}
                    weightBase={pack.weightBase}
                    weightConsumable={pack.weightConsumable}
                    weightTotal={pack.weightTotal}
                    weightWorn={pack.weightWorn}
                  />
                </div>
                <Categories categories={pack.categories} units={units} />
              </div>
            </main>
          </>
        )}
      </div>
    </Components.View>
  );
}

export default Page;

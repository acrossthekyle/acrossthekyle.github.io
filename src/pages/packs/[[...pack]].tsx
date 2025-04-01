'use client';

import Head from 'next/head';

import Components from '@/components';
import Images from '@/images';
import styles from '@/styles/pages/packs/pack.module.scss';
import ViewModels from '@/viewModels';

function Page() {
  const {
    canRenderPacks,
    data,
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
    units,
  } = ViewModels.usePacksViewModel();

  return (
    <Components.View className={styles.view} element="div">
      <Head>
        {!pack && <title>Kyle &mdash; Packs</title>}
        {pack && <title>Kyle &mdash; Packs | {pack.title}</title>}
      </Head>
      {isLoading && <Components.Loading />}
      {isReady && pack && (
        <>
          <aside className={styles.aside} data-browse-packs={canRenderPacks}>
            <div className={styles.content}>
              <button
                className={styles.toggle}
                onClick={handleOnViewStatsClick}
                type="button"
              >
                Back to stats <Images.Icons.Arrow right />
              </button>
              <h3 className={styles.heading}>Packs</h3>
              <div className={styles.units}>
                <Components.Button
                  className={styles.unit}
                  mode={units === 'imperial' ? 'primary' : 'secondary'}
                  onClick={() => handleOnUnitsClick('imperial')}
                  text="Imperial (oz/lbs)"
                />
                <Components.Button
                  className={styles.unit}
                  mode={units === 'metric' ? 'primary' : 'secondary'}
                  onClick={() => handleOnUnitsClick('metric')}
                  text="Metric (g/kg)"
                />
              </div>
              <Components.Packs.Packs
                active={pack?.slug}
                className={canRenderPacks ? styles.visible : undefined}
                onClick={handleOnPackClick}
                packs={data}
                units={units}
              />
            </div>
          </aside>
          <main className={styles.main} data-browse-packs={canRenderPacks}>
            <button
              className={styles.toggle}
              onClick={handleOnViewAllPacksClick}
              type="button"
            >
              View all packs
            </button>
            <h1 className={styles.heading} id="title">
              {pack.title}
            </h1>
            <div className={styles.wrapper}>
              <div className={styles.details}>
                <div className={styles.stats}>
                  <div className={styles.chart}>
                    <Components.Packs.Chart
                      categories={pack.categories}
                      onClick={handleOnChartClick}
                      onHover={handleOnChartHover}
                      units={units}
                    />
                  </div>
                  <Components.Packs.Legend
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
                <Components.Packs.Categories
                  categories={pack.categories}
                  units={units}
                />
              </div>
            </div>
          </main>
        </>
      )}
    </Components.View>
  );
}

export default Page;

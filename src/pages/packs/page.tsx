'use client';

import Head from 'next/head';

import Components from '@/components';
import Images from '@/images';
import styles from '@/styles/pages/packs/index.module.scss';
import ViewModels from '@/models';

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
        <title>Kyle &mdash;&mdash; Packs</title>
      </Head>
      <h1>Packs</h1>
      <p className={styles.paragraph}>
        Every trip is different, with its own set of gear. Here are my loadouts
        that I bring with me on each of my thru-hikes.
      </p>
      <div className={styles.units}>
        <Components.Button
          mode={units === 'imperial' ? 'primary' : 'secondary'}
          onClick={handleOnUnitsClick}
          text="Imperial (oz/lbs)"
        />
        <Components.Button
          mode={units === 'metric' ? 'primary' : 'secondary'}
          onClick={handleOnUnitsClick}
          text="Metric (g/kg)"
        />
      </div>
      <div className={styles.container}>
        {isLoading && <Components.Loading />}
        {isReady && pack && (
          <>
            <aside className={styles.aside} data-browse-packs={canRenderPacks}>
              <button
                className={styles.toggle}
                onClick={handleOnViewStatsClick}
                type="button"
              >
                Back to stats <Images.Icons.Arrow right />
              </button>
              <Components.Pages.Packs.Packs
                active={pack?.slug}
                className={canRenderPacks ? styles.visible : undefined}
                onClick={handleOnPackClick}
                packs={data}
                units={units}
              />
            </aside>
            <main className={styles.main} data-browse-packs={canRenderPacks}>
              <button
                className={styles.toggle}
                onClick={handleOnViewAllPacksClick}
                type="button"
              >
                <Images.Icons.Arrow left /> All packs
              </button>
              <h2 className={styles.heading} id="title">
                {pack.title}
              </h2>
              <div className={styles.wrapper}>
                <div className={styles.stats}>
                  <Components.Pages.Packs.Chart
                    categories={pack.categories}
                    onClick={handleOnChartClick}
                    onHover={handleOnChartHover}
                    units={units}
                  />
                  <Components.Pages.Packs.Legend
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
                <Components.Pages.Packs.Categories
                  categories={pack.categories}
                  units={units}
                />
              </div>
            </main>
          </>
        )}
      </div>
    </Components.View>
  );
}

export default Page;

'use client';

import Head from 'next/head';

import styles from '@/styles/pages/packs/pack.module.scss';
import Button from '@/ui/button';
import ArrowIcon from '@/ui/icons/arrow';
import Loading from '@/ui/loading';
import View from '@/ui/view';
import { useViewModel } from '@/viewModels/packs';

import Categories from './_categories';
import Chart from './_chart';
import Legend from './_legend';
import Packs from './_packs';

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
  } = useViewModel();

  return (
    <View className={styles.view} element="div">
      <Head>
        {!pack && <title>Kyle &mdash; Packs</title>}
        {pack && <title>Kyle &mdash; Packs | {pack.title}</title>}
      </Head>
      {isLoading && <Loading />}
      {isReady && pack && (
        <>
          <aside className={styles.aside} data-browse-packs={canRenderPacks}>
            <div className={styles.content}>
              <button
                className={styles.toggle}
                onClick={handleOnViewStatsClick}
                type="button"
              >
                Back to stats <ArrowIcon right />
              </button>
              <h3 className={styles.heading}>Packs</h3>
              <div className={styles.units}>
                <Button
                  className={styles.unit}
                  mode={units === 'imperial' ? 'primary' : 'secondary'}
                  onClick={() => handleOnUnitsClick('imperial')}
                  text="Imperial (oz/lbs)"
                />
                <Button
                  className={styles.unit}
                  mode={units === 'metric' ? 'primary' : 'secondary'}
                  onClick={() => handleOnUnitsClick('metric')}
                  text="Metric (g/kg)"
                />
              </div>
              <Packs
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
                    <Chart
                      categories={pack.categories}
                      onClick={handleOnChartClick}
                      onHover={handleOnChartHover}
                      units={units}
                    />
                  </div>
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
            </div>
          </main>
        </>
      )}
    </View>
  );
}

export default Page;

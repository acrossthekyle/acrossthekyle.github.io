'use client';

import Head from 'next/head';

import styles from '@/styles/pages/packs/pack.module.scss';
import Button from '@/ui/button';
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
    hoveredCategory,
    isLoading,
    isReady,
    pack,
    units,
  } = useViewModel();

  return (
    <View className={styles.view}>
      <Head>
        {!pack && <title>Kyle &mdash; Packs</title>}
        {pack && <title>Kyle &mdash; Packs | {pack.title}</title>}
      </Head>
      <Button
        className={styles.all}
        onClick={handleOnViewAllPacksClick}
        text={`${canRenderPacks ? 'Hide' : 'View'} All Packs`}
      />
      <h1 className={styles.heading}>Packs</h1>
      {pack && <h3 className={styles.subHeading}>{pack.title}</h3>}
      {pack && <h4 className={styles.subSubHeading}>{pack.type}</h4>}
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
      {isLoading && <Loading />}
      {isReady && (
        <div className={styles.wrapper}>
          <Packs
            active={pack?.slug}
            className={canRenderPacks ? styles.visible : undefined}
            onClick={handleOnPackClick}
            packs={data}
            units={units}
          />
          {pack && (
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
          )}
        </div>
      )}
    </View>
  );
}

export default Page;

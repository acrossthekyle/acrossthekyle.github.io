'use client';

import Head from 'next/head';

import Components from '@/components';
import styles from '@/styles/pages/store/slug.module.scss';
import ViewModels from '@/viewModels';

function Page() {
  const {
    color,
    colorOptions,
    frame,
    frameOptions,
    handleOnAddToCart,
    handleOnSelectColor,
    handleOnSelectFrame,
    handleOnSelectQuantity,
    handleOnSelectSize,
    hasColors,
    image,
    isLoading,
    isReady,
    name,
    price,
    quantityOptions,
    size,
    sizeOptions,
    sizeValue,
    snippet,
  } = ViewModels.useStoreViewModel();

  if (isLoading) {
    return (
      <Components.View className={styles.view}>
        <Head>
          <title>Kyle &mdash; Store</title>
        </Head>
        <Components.Loading />
      </Components.View>
    );
  }

  if (!isReady) {
    return null;
  }

  return (
    <Components.View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Store | {name}</title>
      </Head>
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Store',
            uri: '/store',
          },
          {
            text: name,
          },
        ]}
      />
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <div
            className={styles.image}
            data-frame={frame}
            data-frame-color={color}
            data-frame-size={sizeValue}
          >
            <Components.Image
              alt={name}
              height={432}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={image}
              width={768}
            />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.header}>{name}</h1>
          <h2 className={styles.price}>${price}</h2>
          <p className={styles.snippet}>{snippet}</p>
          <form className={styles.form}>
            <div className={styles.item}>
              <Components.Store.Select
                label="Frame"
                onChange={handleOnSelectFrame}
                options={frameOptions}
                value={frame}
              />
            </div>
            <div className={styles.item}>
              <Components.Store.Select
                label="Size"
                onChange={handleOnSelectSize}
                options={sizeOptions}
                value={size}
              />
            </div>
            {hasColors && (
              <div className={styles.item}>
                <Components.Store.Select
                  label="Frame Color"
                  onChange={handleOnSelectColor}
                  options={colorOptions}
                  value={color}
                />
              </div>
            )}
            <div className={styles.item}>
              <Components.Store.Select
                label="Quantity"
                onChange={handleOnSelectQuantity}
                options={quantityOptions}
              />
            </div>
            <Components.Button
              className={styles.add}
              onClick={handleOnAddToCart}
              text="Add to cart"
            />
            <small className={styles.choose}>
              Image shown is preview-only, actual amount of photo space cropped
              on final product may vary
            </small>
          </form>
          <div className={styles.description}>
            <h3>Printing</h3>
            {frame === 0 && (
              <>
                <p>
                  Printed on Ultra Premium Luster Photo Paper, which has a
                  mixture of a gloss and matte finish, with multicolor
                  water-based inket printing techniques. This print gives you a
                  highly saturated look, and because of its saturation and
                  resistance to fingerprints luster paper is great for quality
                  photographic prints.
                </p>
                <h4>Specs and Materials</h4>
                <ul>
                  <li>10 mil (0.25 mm) thick paper</li>
                  <li>260 g/m² paper weight</li>
                  <li>Slightly glossy</li>
                  <li>Fingerprint resistant</li>
                </ul>
              </>
            )}
            {frame === 1 && (
              <>
                <p>
                  Printed on Ultra Premium Luster Photo Paper, which has a
                  mixture of a gloss and matte finish, with multicolor
                  water-based inket printing techniques. This print gives you a
                  highly saturated look, and because of its saturation and
                  resistance to fingerprints, luster paper is great for quality
                  photographic prints. This poster is framed in an alder,
                  semi-hardwood frame, and comes ready to hang on the wall.
                </p>
                <h4>Specs and Materials</h4>
                <ul>
                  <li>10 mil (0.25 mm) thick paper</li>
                  <li>260 g/m² paper weight</li>
                  <li>.75" thick ayous wood frame from renewable forests</li>
                  <li>Hanging hardware included</li>
                  <li>Acrylite front protector</li>
                  <li>Slightly glossy</li>
                </ul>
              </>
            )}
            {frame === 2 && (
              <>
                <p>
                  Printed on museum-quality matte paper with multicolor
                  water-based inket printing techniques, this print gives prints
                  a polished and sophisticated look. This poster is framed and
                  comes ready to hang on the wall. The white mat board covers
                  parts of the poster paper, and place each of the mounting
                  hooks 1 inch from frame corners when hanging horizontally.
                </p>
                <h4>Specs and Materials</h4>
                <ul>
                  <li>10.3 mil (0.26 mm) thick paper</li>
                  <li>189 g/m² paper weight</li>
                  <li>.75" thick ayous wood frame from renewable forests</li>
                  <li>Hanging hardware included</li>
                  <li>Acrylite front protector</li>
                </ul>
              </>
            )}
          </div>
          <div className={styles.policies}>
            <h3>Store Policies</h3>
            <p>No Returns or Exchanges.</p>
            <p>
              For prints there will be size variations due to different frame
              sizes and their associated aspect ratios, which will lead to
              variations in image cropping.
            </p>
            <p>
              Processing times vary, and can take up to 5-9 business days, but
              most items are usually shipped within 6 business days or fewer.
              Shipping times can also vary, depending on the shipping address.
            </p>
            <p>
              If, for any reason, your print arrives damaged or misprinted (does
              not apply to ordering the wrong size, or simply changing your
              mind), I will gladly provide you with a one-time replacement
              without any additional fees after providing proof of
              damage/misprint. You must reach out within 14 days of product
              delivery. After 14 days no replacements will be provided.
            </p>
            <p>
              A printing partner (Printful) is used for the production and
              shipping of items.
            </p>
          </div>
        </div>
      </div>
    </Components.View>
  );
}

export default Page;

import { ChangeEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Components from '@/components';
import { usePrintData } from '@/data/prints';
import Images from '@/images';
import styles from '@/styles/pages/shop/slug.module.scss';

function Page() {
  const { push } = useRouter();

  const { data, hasError, isLoading, isReady } = usePrintData();

  const [color, setColor] = useState('white');
  const [frame, setFrame] = useState('mat');

  useEffect(() => {
    if (hasError) {
      push('/shop');
    }
  }, [hasError, push]);

  const handleOnSelectFrameStyle = (event: ChangeEvent<HTMLSelectElement>) => {
    setFrame((event.target as HTMLSelectElement).value);
  };

  const handleOnColorClick = (value: string) => {
    setColor(value);
  };

  if (isLoading) {
    return (
      <Components.View className={styles.view}>
        <Head>
          <title>Kyle &mdash; Shop</title>
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
        <title>Kyle &mdash; Shop | {data.title}</title>
      </Head>
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Shop',
            uri: '/shop',
          },
          {
            text: data.title,
          },
        ]}
      />
      <div className={styles.wrapper}>
        <div
          className={styles.image}
          data-frame-color={color}
          data-style={frame}
        >
          <Components.Image
            alt={data.title}
            height={432}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={data.image}
            width={768}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.header}>{data.title}</h1>
          <h2 className={styles.price}>
            {frame === 'none' && <>$100.00</>}
            {frame === 'framed' && <>$185.00</>}
            {frame === 'mat' && <>$215.00</>}
          </h2>
          <p className={styles.snippet}>{data.snippet}</p>
          <form className={styles.form}>
            <div className={styles.item}>
              <label className={styles.label} htmlFor="style">
                Style
              </label>
              <select
                className={styles.select}
                id="style"
                name="style"
                onChange={handleOnSelectFrameStyle}
                value={frame}
              >
                <option value="mat">Framed with Mat</option>
                <option value="framed">Framed</option>
                <option value="none">Frameless</option>
              </select>
            </div>
            {frame !== 'none' && (
              <div className={styles.item}>
                <span className={styles.label}>Available Frame Colors</span>
                <span className={styles.value}>
                  <button
                    className={styles.color}
                    onClick={() => handleOnColorClick('white')}
                    title="White"
                    type="button"
                  />
                  <button
                    className={styles.color}
                    onClick={() => handleOnColorClick('black')}
                    title="Black"
                    type="button"
                  />
                </span>
              </div>
            )}
            <div className={styles.item}>
              <span className={styles.label}>Available Sizes</span>
              <span className={styles.value}>
                {frame === 'none' && <>5" x 7" &mdash; 18" x 24"</>}
                {frame === 'framed' && <>8" x 10" &mdash; 18" x 24"</>}
                {frame === 'mat' && <>12" x 16" &mdash; 18" x 24"</>}
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Quantity</span>
              <span className={styles.value}>1</span>
            </div>
            <Components.Button
              aria-label="Purchase (opens in a new tab/window)"
              className={styles.purchase}
              href={data.paymentLinks[['none', 'framed', 'mat'].indexOf(frame)]}
              id="purchase"
              text={
                <>
                  Purchase via <Images.Icons.Stripe className={styles.stripe} />
                </>
              }
            />
            <small className={styles.choose}>
              Choose size, and frame color, during checkout
            </small>
            <small className={styles.choose}>
              Image shown is preview-only, actual amount of photo space cropped on final product may vary
            </small>
          </form>
          <div className={styles.description}>
            <h3>Printing</h3>
            {frame === 'none' && (
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
            {frame === 'framed' && (
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
            {frame === 'mat' && (
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
            <h3>Shop Policies</h3>
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

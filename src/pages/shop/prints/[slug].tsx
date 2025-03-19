import { kebabCase } from 'lodash';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { usePrintData } from '@/data/print';
import styles from '@/styles/pages/shop/prints.module.scss';
import Frame from '@/ui/shop/frame';
import Breadcrumbs from '@/ui/breadcrumbs';
import Button from '@/ui/button';
import Checkmark from '@/ui/icons/checkmark';
import Dialog from '@/ui/dialog';
import Image from '@/ui/image';
import Loading from '@/ui/loading';
import View from '@/ui/view';

function Page() {
  const [canAlert, setCanAlert] = useState(false);
  const [frame, setFrame] = useState(null);

  const { push } = useRouter();

  const { data, hasError, isLoading } = usePrintData();

  useEffect(() => {
    if (hasError) {
      push('/shop');
    }
  }, [hasError, push]);

  const handleOnFrameClick = (index: number) => {
    setFrame(index);
  };

  const handleOnNullFramePress = () => {
    setCanAlert(true);
  };

  const handleOnDialogDismiss = () => {
    setCanAlert(false);

    document.getElementById('purchase').focus();
  };

  if (isLoading) {
    return (
      <View className={styles.view}>
        <Head>
          <title>Kyle &mdash; Shop</title>
        </Head>
        <Loading />
      </View>
    );
  }

  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Shop | {data.title}</title>
      </Head>
      <Dialog
        isRenderable={canAlert}
        onDismiss={handleOnDialogDismiss}
        text="Please choose a style before continuing"
      />
      <Breadcrumbs
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
        <div className={styles.image}>
          <Image
            alt={data.title}
            height={432}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={data.image}
            width={768}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.centered}>
            <h1 className={styles.item}>{data.title}</h1>
            {(frame === 0 || frame === null) && (
              <h5
                aria-label="Available sizes: five inches by seven inches up to eighteen inches by twenty four inches"
                className={styles.sizes}
              >
                5 x 7 &mdash; 18 x 24
              </h5>
            )}
            {frame === 1 && (
              <h5
                aria-label="Available sizes: eight inches by ten inches up to eighteen inches by twenty four inches"
                className={styles.sizes}
              >
                8 x 10 &mdash; 18 x 24
              </h5>
            )}
            {frame === 2 && (
              <h5
                aria-label="Available sizes: twelve inches by sixteen inches up to eighteen inches by twenty four inches"
                className={styles.sizes}
              >
                12 x 16 &mdash; 18 x 24
              </h5>
            )}
            <h3 className={styles.price}>
              {frame === null && <span aria-hidden="true">from</span>}
              {(frame === 0 || frame === null) && <>$100.00</>}
              {frame === 1 && <>$185.00</>}
              {frame === 2 && <>$215.00</>}
            </h3>
            <small>Choose one of the following:</small>
            <div
              aria-label="Frame styles"
              className={styles.frames}
              role="listbox"
            >
              {['Frameless', 'Framed', 'Frame with Mat'].map(
                (text: string, index: number) => (
                  <button
                    aria-label={text}
                    aria-selected={frame === index}
                    className={`${styles.button} ${frame === index && styles.selected}`.trim()}
                    key={text}
                    onClick={() => handleOnFrameClick(index)}
                    role="option"
                  >
                    <span aria-hidden="true" className={styles.title}>
                      {text}
                    </span>
                    <Frame className={styles.frame} mode={kebabCase(text)}>
                      {frame === index && <Checkmark />}
                    </Frame>
                  </button>
                ),
              )}
            </div>
            <div className={styles.checkout}>
              <Button
                aria-label={
                  frame === null
                    ? 'Purchase'
                    : 'Purchase (opens in a new tab/window)'
                }
                href={frame === null ? '' : data.paymentLinks[frame]}
                id="purchase"
                onClick={frame === null && handleOnNullFramePress}
                text="Purchase"
              />
              {frame > 0 ? (
                <small>Choose size, and frame color, during checkout</small>
              ) : (
                <small>Choose size during checkout</small>
              )}
              <div className={styles.links}>
                <Link
                  className={styles.learn}
                  href="/shop/details/prints"
                  target="_blank"
                >
                  Frame Details
                </Link>
                <span aria-hidden="true">|</span>
                <Link
                  className={styles.learn}
                  href="/shop/policies"
                  target="_blank"
                >
                  Shop Policies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Page;

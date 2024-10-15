import { kebabCase } from 'lodash';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/shop/prints.module.scss';
import Frame from '@/ui/shop/frame';
import Breadcrumbs from '@/ui/breadcrumbs';
import Button from '@/ui/button';
import Checkmark from '@/ui/icons/checkmark';
import Dialog from '@/ui/dialog';
import Image from '@/ui/image';
import Internal from '@/ui/internal';
import View from '@/ui/view';

import prints from '../../../prints';

function Page() {
  const [canAlert, setCanAlert] = useState(false);
  const [item, setItem] = useState(null);
  const [frame, setFrame] = useState(null);

  const { asPath, push } = useRouter();

  useEffect(() => {
    if (item === null) {
      const parts = asPath.split('/prints/');

      if (parts[1] !== '[slug]') {
        const result = prints.getById(parts[1]);

        if (result === undefined) {
          push('/shop');
        } else {
          setItem(result);
        }
      }
    }
  }, [asPath, item, push]);

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

  if (item === null) {
    return;
  }

  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop | {item.title}</title>
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
            text: item.title,
          },
        ]}
      />
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            alt={item.title}
            height={432}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={item.image}
            width={768}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.centered}>
            <h1 className={styles.item}>{item.title}</h1>
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
                href={item.paymentLinks[frame]}
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

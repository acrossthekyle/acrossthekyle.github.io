import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/shop/prints.module.scss';
import Button from '@/ui/button';
import Checkmark from '@/ui/icons/checkmark';
import Dialog from '@/ui/dialog';
import Image from '@/ui/image';
import Internal from '@/ui/internal';
import Policies from '@/ui/shop/policies';
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
        onDismiss={() => setCanAlert(false)}
        text="Please choose a style before continuing"
      />
      <ul className={styles.breadcrumbs}>
        <li className={styles.breadcrumb}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.breadcrumb}>{item.title}</li>
      </ul>
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
            <small className={styles.sizes}>
              {(frame === 0 || frame === null) && <>5 x 7 &mdash; 18 x 24</>}
              {frame === 1 && <>8 x 10 &mdash; 18 x 24</>}
              {frame === 2 && <>12 x 16 &mdash; 18 x 24</>}
            </small>
            <h3 className={styles.price}>
              {frame === null && <span>from</span>}
              {(frame === 0 || frame === null) && <>$100.00</>}
              {frame === 1 && <>$185.00</>}
              {frame === 2 && <>$215.00</>}
            </h3>
            <small>Choose one of the following:</small>
            <div className={styles.frames}>
              {['Frameless', 'Framed', 'Frame with Mat'].map(
                (text: string, index: number) => (
                  <button
                    className={`${styles.button} ${frame === index && styles.selected}`.trim()}
                    key={text}
                    onClick={() => handleOnFrameClick(index)}
                  >
                    <span className={styles.title}>{text}</span>
                    <div className={styles.frame}>
                      {frame === index && <Checkmark />}
                    </div>
                  </button>
                ),
              )}
            </div>
            <div className={styles.checkout}>
              <Button
                href={item.paymentLinks[frame]}
                onClick={frame === null && handleOnNullFramePress}
                text="Purchase"
              />
              <small>
                Choose size{frame > 0 && <>, and frame color,</>} during
                checkout
              </small>
              <div className={styles.links}>
                <Link
                  className={styles.learn}
                  href="/shop/details/prints"
                  target="_blank"
                >
                  Frame Details
                </Link>
                <span>|</span>
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

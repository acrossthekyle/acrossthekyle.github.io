import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/shop/details.module.scss';
import ArrowIcon from '@/ui/icons/arrow';
import Button from '@/ui/button';
import Image from '@/ui/image';
import Internal from '@/ui/internal';
import Zoom from '@/ui/zoom';
import View from '@/ui/view';

import prints from '../../../prints';

function Page() {
  const [item, setItem] = useState(null);

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

  if (item === null) {
    return;
  }

  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop | {item.title}</title>
      </Head>
      <div className={styles.container}>
        <div data-backdrop data-backdrop-active="false" />
        <div className={styles.images}>
          <div className={styles.image}>
            <Zoom alt={item.title} height={432} src={item.image} width={768} />
          </div>
          <div className={styles.mocks}>
            <div className={styles.image}>
              <Zoom
                alt="packaging"
                height={432}
                src="shop/prints/mocks/d0111e15-e6e3-47a5-824b-99fe1a80dd55.jpg"
                width={768}
              />
            </div>
            {(item.mocks || []).map((mock: string) => (
              <div className={styles.image} key={mock}>
                <Zoom height={432} src={mock} width={768} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <h2 className={styles.price}>${item.price}</h2>
          <Button href={item.paymentLink} text="Purchase" />
          <p className={styles.snippet}>{item.snippet}</p>
          <h4>Available Sizes</h4>
          <ul>
            <li>5" x 7"</li>
            <li>8" x 10"</li>
            <li>11" x 14"</li>
            <li>12" x 16"</li>
            <li>12" x 18"</li>
            <li>16" x 20"</li>
            <li>18" x 24"</li>
          </ul>
          <h4>Details</h4>
          <p>
            Printed on Ultra Premium Luster Photo Paper, which has a mixture of
            a gloss and matte finish, with multicolor water-based inket printing
            techniques. This print gives you a highly saturated look, and
            because of its saturation and resistance to fingerprints, luster
            paper is great for quality photographic prints.
          </p>
          <ul>
            <li>10 mil (0.25 mm) thick</li>
            <li>260 g/m² paper weight</li>
            <li>Slightly glossy</li>
            <li>Fingerprint resistant</li>
            <li>Paper is sourced from Japan</li>
          </ul>
        </div>
      </div>
    </View>
  );
}

export default Page;

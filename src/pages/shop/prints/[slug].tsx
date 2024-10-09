import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/shop/details.module.scss';
import Button from '@/ui/button';
import Checkmark from '@/ui/icons/checkmark';
import Image from '@/ui/image';
import Internal from '@/ui/internal';
import Policies from '@/ui/shop/policies';
import View from '@/ui/view';

import prints from '../../../prints';

function DetailsForFrameless() {
  return (
    <>
      <h4>Details for Frameless Print</h4>
      <p>
        Printed on Ultra Premium Luster Photo Paper, which has a mixture of a
        gloss and matte finish, with multicolor water-based inket printing
        techniques. This print gives you a highly saturated look, and because of
        its saturation and resistance to fingerprints, luster paper is great for
        quality photographic prints.
      </p>
      <h4>Specs and Materials</h4>
      <ul>
        <li>10 mil (0.25 mm) thick paper</li>
        <li>260 g/m² paper weight</li>
        <li>Slightly glossy</li>
        <li>Fingerprint resistant</li>
      </ul>
    </>
  );
}

function DetailsForFramed() {
  return (
    <>
      <h4>Details for Framed Print</h4>
      <p>
        Printed on Ultra Premium Luster Photo Paper, which has a mixture of a
        gloss and matte finish, with multicolor water-based inket printing
        techniques. This print gives you a highly saturated look, and because of
        its saturation and resistance to fingerprints, luster paper is great for
        quality photographic prints. This poster is framed in an alder,
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
  );
}

function DetailsForFramedWithMat() {
  return (
    <>
      <h4>Details for Framed with Mat Print</h4>
      <p>
        Printed on museum-quality matte paper with multicolor water-based inket
        printing techniques, this print gives prints a polished and
        sophisticated look. This poster is framed and comes ready to hang on the
        wall. The white mat board covers parts of the poster paper, and place
        each of the mounting hooks 1 inch from frame corners when hanging
        horizontally.
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
  );
}

function Page() {
  const [item, setItem] = useState(null);
  const [frame, setFrame] = useState(0);

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

  if (item === null) {
    return;
  }

  return (
    <View>
      <Head>
        <title>Kyle &mdash; Shop | {item.title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image alt={item.title} height={432} src={item.image} width={768} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.price}>
            <span>From</span>
            {frame === 0 && <>$100</>}
            {frame === 1 && <>$185</>}
            {frame === 2 && <>$215</>}
          </h3>
          <h1 className={styles.item}>{item.title}</h1>
          <small>
            {frame === 0 && <>5 x 7 &mdash; 18 x 24</>}
            {frame === 1 && <>8 x 10 &mdash; 18 x 24</>}
            {frame === 2 && <>12 x 16 &mdash; 18 x 24</>}
          </small>
          <div className={styles.frames}>
            {['Frameless', 'Framed', 'Frame with Mat'].map(
              (text: string, index: number) => (
                <button key={text} onClick={() => handleOnFrameClick(index)}>
                  <span className={styles.title}>{text}</span>
                  <div
                    className={`${styles.frame} ${frame === index && styles.selected}`.trim()}
                  >
                    {frame === index && <Checkmark />}
                  </div>
                </button>
              ),
            )}
          </div>
          <div className={styles.checkout}>
            <Button href={item.paymentLinks[frame]} text="Go to Checkout" />
            <small>
              Choose size{frame > 0 && <>, and frame color,</>} during checkout
            </small>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Page;

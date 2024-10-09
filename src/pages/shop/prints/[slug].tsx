import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/pages/shop/details.module.scss';
import Button from '@/ui/button';
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
      <p>
        There will be some variation in cropping of the print due to different
        print size aspect ratios.
      </p>
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
      <p>
        There will be some variation in cropping of the print due to different
        print size aspect ratios.
      </p>
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
      <p>
        There will be some variation in cropping of the print due to different
        print size aspect ratios, and the white mat board.
      </p>
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
        <div data-backdrop data-backdrop-active="false" />
        <div className={styles.image}>
          <Image
            alt={item.title}
            height={432}
            src={frame === 0 ? item.image : item.mocks[frame - 1]}
            width={768}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <h3 className={styles.price}>Starting at $100</h3>
          <p className={styles.snippet}>{item.snippet}</p>
          <h4>Available Sizes</h4>
          <ul>
            <li>
              <small>Frameless</small>
            </li>
            <li>5" x 7"</li>
            <li>
              <small>Frameless, Framed without Mat</small>
            </li>
            <li>8" x 10"</li>
            <li>11" x 14"</li>
            <li>
              <small>Frameless, Framed with Mat, Framed without Mat</small>
            </li>
            <li>12" x 16"</li>
            <li>12" x 18"</li>
            <li>16" x 20"</li>
            <li>18" x 24"</li>
          </ul>
          <h4>Available Frame Colors</h4>
          <ul>
            <li>
              <span className={styles.hex} style={{ background: '#000000' }} />
              Black
            </li>
            <li>
              <span className={styles.hex} style={{ background: '#FFFFFF' }} />
              White
            </li>
          </ul>
          <div className={styles.frames}>
            {['Frameless', 'Framed', 'Framed with Mat'].map(
              (text: string, index: number) => (
                <button key={text} onClick={() => handleOnFrameClick(index)}>
                  <span className={styles.title}>{text}</span>
                  <div
                    className={`${styles.frame} ${frame === index && styles.selected}`.trim()}
                  />
                </button>
              ),
            )}
          </div>
          <div className={styles.checkout}>
            <Button
              href={item.paymentLinks[frame]}
              text="Proceed to Checkout"
            />
          </div>
          <h4>Policies</h4>
          <Policies />
        </div>
      </div>
    </View>
  );
}

export default Page;

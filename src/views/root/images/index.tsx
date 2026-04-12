import Link from 'next/link';
import { Fragment } from 'react';

import { Image } from '@/ui/image';

import styles from './stylesheet';

const IMAGES = [
  {
    link: '/trails/gr20-2023',
    src: 'profile/05769f04-5b00-4fd5-a233-55c00c9871c5.jpeg',
  },
  {
    link: '/albums/cairo-2022',
    src: 'profile/c0f9c079-8942-4390-bb9e-dae4e0a65034.jpeg',
  },
  {
    link: '/trails/annapurna-circuit-2019',
    src: 'profile/565f5ace-5d15-455b-95ae-2d478110c5ee.jpeg',
  },
  {
    link: '/trails/o-circuit-2020',
    src: 'profile/38a1b675-74c7-45b5-9e37-8020d298a0b3.jpeg',
  },
  {
    link: '/trails/alta-via-1-2019',
    src: 'profile/b1128805-54bb-4b7b-adcb-f2b6ae3fada6.jpeg',
  },
  {
    link: '/trails/tour-du-mont-blanc-2018',
    src: 'profile/7d2becf5-b4cb-4b4d-a1d3-bf0d5c3a1ec7.jpeg',
  },
  {
    link: '/trails/camino-frances-2018',
    src: 'profile/aa8b0404-f4d1-44ed-bc96-ce65eae03848.jpeg',
  },
];

export default function Images() {
  return (
    <div aria-label="images of me" className={styles.container}>
      <ul className={styles.items}>
        {IMAGES.map((image, index: number) => (
          <Fragment key={image.src}>
            {(index === 0 || index === 7) && (<li aria-hidden="true" />)}

            <li className={styles.item}>
              <Link href={image.link}>
                <Image className={styles.image} src={image.src} />
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

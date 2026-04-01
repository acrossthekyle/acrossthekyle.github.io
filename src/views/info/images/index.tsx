'use client';

import { useState } from 'react';

import { Image } from '@/ui/image';

import styles from './stylesheet';

const IMAGES = [
  'profile/565f5ace-5d15-455b-95ae-2d478110c5ee.jpeg',
  'profile/38a1b675-74c7-45b5-9e37-8020d298a0b3.jpeg',
  'profile/7d2becf5-b4cb-4b4d-a1d3-bf0d5c3a1ec7.jpeg',
];

export default function Images() {
  const [active, setActive] = useState(0);

  const handleOnClick = (value: number) => {
    setActive(value);
  };

  return (
    <div aria-label="image gallery" className={styles.container} role="region">
      <ul className={styles.controls}>
        {IMAGES.map((_, index: number) => (
          <li key={index}>
            <button
              aria-current={index === active ? 'true' : undefined}
              onClick={() => handleOnClick(index)}
              type="button"
            >
              [ {index === active ? 'o' : '_'} ]
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.slides}>
        {IMAGES.map((src, index: number) => (
          <li
            aria-hidden={active === index ? 'false' : 'true'}
            aria-roledescription="slide"
            className={styles.slide}
            key={src}
            role="group"
          >
            <Image
              alt="image of kyle"
              className={styles.image(active === index)}
              src={src}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

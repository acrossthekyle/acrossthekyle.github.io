import { Image } from '@/ui/image';

import styles from './stylesheet';

const IMAGES = [
  'profile/565f5ace-5d15-455b-95ae-2d478110c5ee.jpeg',
  'profile/38a1b675-74c7-45b5-9e37-8020d298a0b3.jpeg',
  'profile/7d2becf5-b4cb-4b4d-a1d3-bf0d5c3a1ec7.jpeg',
];

export default function Images() {
  return (
    <div aria-label="images of me" className={styles.container}>
      <ul className={styles.items}>
        {IMAGES.map((src, index: number) => (
          <li className={styles.item(index)} key={src}>
            <Image className={styles.image} src={src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

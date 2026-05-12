import type { Data } from '@/types';
import { Ui } from '@/ui';

import styles from './stylesheet';

type Props = {
  colorMode: string;
  image: Data;
  onCategory: (category: string) => void;
  onClick: (image: Data) => void;
  onCollection: (id: string) => void;
  onLocation: (value: string) => void;
  ratio: string;
};

export default function Image({
  colorMode,
  image,
  onCategory,
  onClick,
  onCollection,
  onLocation,
  ratio,
}: Props) {
  return (
    <figure>
      <button
        aria-label="view image details"
        className={styles.cta}
        onClick={() => onClick(image)}
        type="button"
      >
        <Ui.Image
          className={styles.image(colorMode, ratio)}
          src={image.src}
          thumb={image.thumb}
        />
      </button>
      <figcaption className={styles.caption}>
        <ul className={styles.tags}>
          <li>
            <button
              aria-label={`view photos in ${image.category} category`}
              className={styles.tag}
              onClick={() => onCollection(image.collection.id)}
              type="button"
            >
              {image.collection.title}
            </button>
          </li>
          <li>
            <button
              aria-label={`view photos taken in ${image.location.continent}`}
              className={styles.tag}
              onClick={() => onLocation(image.location.continent)}
              type="button"
            >
              {image.location.continent}
            </button>
          </li>
          <li>
            <button
              aria-label={`view photos in ${image.category} category`}
              className={styles.tag}
              onClick={() => onCategory(image.category)}
              type="button"
            >
              {image.category}
            </button>
          </li>
        </ul>
        {image.location.region}, {image.location.country}
        <span className={styles.faded}>
          {image.when}
        </span>
      </figcaption>
    </figure>
  );
}

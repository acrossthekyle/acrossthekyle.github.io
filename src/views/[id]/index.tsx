import type { Collection, Data } from '@/types';
import { Ui } from '@/ui';
import { padIndex, trimCardinal } from '@/utils';

import Back from './back';
import Image from './image';
import styles from './stylesheet';

type Props = {
  data: {
    collection: Collection;
    images: Array<Data[]>;
    index: number;
  };
};

export default function View({ data }: Props) {
  let globalIndex = 0;

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <Back />
          <span className={styles.index}>{padIndex(data.index)}</span>
        </div>
        <div>
          <h1 className={styles.title}>
            <span className={styles.eyebrow}>
              {data.collection.location.country}
            </span>
            {data.collection.title.map((chunk, part) => (
              <span className={styles.chunk} key={chunk}>
                {chunk}
                {part === 0 && (
                  <span className={styles.count}>( {data.collection.count} )</span>
                )}
              </span>
            ))}
          </h1>
          <section
            aria-label="overview"
            className={styles.notes}
          >
            {data.collection.notes.map((paragraph) => (
              <p className={styles.paragraph} key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <p className={styles.footer}>
            <span>
              {data.collection.category}, {trimCardinal(data.collection.location.continent)}
            </span>
            <span>
              {data.collection.when}
            </span>
          </p>
        </div>
      </header>
      <ul className={styles.grid}>
        {data.images.map((group, parent) => {
          return (
            <li
              key={parent}
              className={styles.cell(parent, data.images.length, group.length)}
            >
              {group.map((image, child) => {
                globalIndex++;

                return (
                  <Image
                    child={child}
                    image={image}
                    index={globalIndex}
                    key={image.src}
                    parent={parent}
                  />
                );
              })}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

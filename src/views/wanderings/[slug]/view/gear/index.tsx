import type { Gear } from '@/types';

import styles from './stylesheet';

type Props = {
  gear: Gear;
};

export default function Gear({ gear }: Props) {
  return (
    <section aria-labelledby="gear">
      <h2 className={styles.heading} id="gear">
        Gear used on this trek:
      </h2>
      <ul className={styles.list}>
        {gear.categories.map((category) => (
          <li className={styles.category} key={category.title}>
            <h3 className={styles.index}>
              {category.title}:
            </h3>
            <ul className={styles.items}>
              {category.items.map((item, index) => (
                <li className={styles.item} key={index}>
                  {item.name.join(' ')}
                  {index !== category.items.length - 1 && (
                    <>, </>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

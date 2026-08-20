'use client';

import { useView } from '@/hooks/useView';
import tw from '@/styles';

type Props = {
  total: number;
};

export default function Header({ total }: Props) {
  const { onView, view } = useView();

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Gallery</h2>
      <span className={styles.total}>
        {total} Images
      </span>
      <nav aria-label="gallery view">
        <ul className={styles.controls}>
          <li className={styles.item(view === 'grid')}>
            <button
              className={styles.grid}
              onClick={() => onView('grid')}
              title="View images in Grid mode"
              type="button"
            >
              <span className={styles.square} />
              <span className={styles.square} />
              <span className={styles.square} />
              <span className={styles.square} />
              <span className={styles.square} />
              <span className={styles.square} />
            </button>
          </li>
          <li className={styles.item(view === 'theater')}>
            <button
              className={styles.theater}
              onClick={() => onView('theater')}
              title="View images in Theater mode"
              type="button"
            >
              <span className={styles.hero} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = tw({
  container: `
    grid grid-cols-3
    w-full
    px-6 py-6
  `,
  header: `
    flex items-center
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  total: `
    flex items-center justify-center
    uppercase
    text-sm

    sm:text-xs
    lg:text-tiny
  `,
  controls: `
    flex items-center justify-end gap-3
  `,
  item: (isCurrent: boolean) => tw(`
    ${isCurrent ? 'opacity-100' : 'opacity-25'}
  `),
  grid: `
    grid grid-cols-3 grid-rows-2 gap-0.25
  `,
  square: `
    block
    border border-current
    rounded-xs
    h-2 w-2

    lg:h-1.5
    lg:w-1.5
  `,
  theater: `
    grid grid-cols-1
  `,
  hero: `
    block
    border border-current
    rounded-xs
    h-4.75 w-6.75

    lg:h-3.5
    lg:w-5.5
  `,
});

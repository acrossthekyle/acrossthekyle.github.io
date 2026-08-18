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
    px-6 py-4.5
  `,
  header: `
    flex items-center
    uppercase
    font-black
    text-xs
    tracking-wide

    sm:text-tiny
  `,
  total: `
    flex items-center justify-center
    uppercase
    text-tiny

    sm:text-xtiny
  `,
  controls: `
    flex items-center justify-end gap-2
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
    h-1.5 w-1.5
  `,
  theater: `
    grid grid-cols-1
  `,
  hero: `
    block
    border border-current
    rounded-xs
    h-3.5 w-5.5
  `,
});

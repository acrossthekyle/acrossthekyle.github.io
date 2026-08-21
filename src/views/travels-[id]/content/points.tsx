import Link from 'next/link';

import tw from '@/styles';
import type { Collection } from '@/types';

type Props = {
  collections: Collection[];
};

export default function Travels({ collections }: Props) {
  const sorted = [...collections].sort((a, b) => Number(b.year) - Number(a.year));
  const grouped = Map.groupBy(sorted, item => item.year);
  const items = Array.from(grouped.entries());

  return (
    <article className={styles.container} id="points">
      <h2 className={styles.header}>
        <span className={styles.index}>02</span>
        Trail
      </h2>
      <ul>
        <li className={styles.group}>
          <h3 className={styles.label}>Start</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Ch'allakancha
                </span>
                <span className={styles.tag}>12,231 ft</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Ch'allakancha &mdash; Soraypampa
                </span>
                <span className={styles.tag}>3.1 miles &mdash; 3.5 hours</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Landmark</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Humantay Lake
                </span>
                <span className={styles.tag}>14,231 ft</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Soraypampa &mdash; Paucarcancha
                </span>
                <span className={styles.tag}>14.5 miles &mdash; 8 hours</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Landmark</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Salkantay Pass
                </span>
                <span className={styles.tag}>15,931 ft</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Soraypampa &mdash; Paucarcancha
                </span>
                <span className={styles.tag}>14.5 miles &mdash; 8 hours</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Soraypampa &mdash; Paucarcancha
                </span>
                <span className={styles.tag}>14.5 miles &mdash; 8 hours</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Stage</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Soraypampa &mdash; Paucarcancha
                </span>
                <span className={styles.tag}>14.5 miles &mdash; 8 hours</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>End</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Macchu Pichu
                </span>
                <span className={styles.tag}>7,837 ft</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      {/*<h2 className={styles.header}>
        <span className={styles.index}>02</span>
        Itinerary
      </h2>
      <ul>
        <li className={styles.group}>
          <h3 className={styles.label}>Arrival</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Puerto Maldonado
                </span>
                <span className={styles.tag}>06/10/2026</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Night</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Dark Jungle Walk
                </span>
                <span className={styles.tag}>06/10/2026</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Dawn</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Macaw/Parrot Clay Lick
                </span>
                <span className={styles.tag}>06/11/2026</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Afternoon</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  River Otters
                </span>
                <span className={styles.tag}>06/11/2026</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Morning</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Annaconda Search
                </span>
                <span className={styles.tag}>06/12/2026</span>
              </button>
            </li>
          </ul>
        </li>
        <li className={styles.group}>
          <h3 className={styles.label}>Evening</h3>
          <ul className={styles.collections}>
            <li>
              <button
                className={styles.link}
                type="button"
              >
                <span className={styles.title}>
                  Sunset Canopy Tower
                </span>
                <span className={styles.tag}>06/12/2026</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>*/}
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    border-t border-current/12.5
  `,
  header: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  group: `
    relative
    flex
    mb-6

    last:mb-0
  `,
  label: `
    w-24
    pt-0.75
    text-xs
    uppercase

    sm:text-tiny
    sm:pt-0
  `,
  collections: `
    flex flex-col gap-4
    w-full
  `,
  link: `
    relative
    flex flex-col gap-1
    w-full
    text-base text-left

    before:absolute
    before:-inset-2
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
    lg:text-xs
  `,
  title: `
    font-black
  `,
  tag: `
    text-xs
    font-mono

    sm:text-tiny
  `,
  location: `
    flex flex-wrap gap-1
    text-sm

    sm:text-xs
  `,
  emphasis: `
    font-serif italic
  `,
});

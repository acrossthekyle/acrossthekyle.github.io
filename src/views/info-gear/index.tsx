import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
import { Weight } from '@/ui/units';
import { Footer } from '@/ui/views/info';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: {
    gear: Array<{
      categories: Array<{
        title: string;
        items: Array<{
          consumable: boolean;
          link: string;
          name: string;
          seller: string;
          weight: {
            imperial: string;
            metric: string;
          };
          worn: boolean;
        }>;
        weight: {
          imperial: string;
          metric: string;
        };
      }>;
      id: string;
      weightBase: {
        imperial: string;
        metric: string;
      };
      weightConsumable: {
        imperial: string;
        metric: string;
      };
      weightTotal: {
        imperial: string;
        metric: string;
      };
      weightWorn: {
        imperial: string;
        metric: string;
      };
    }>;
  };
  index: string;
};

const FILTERS = [
  {
    index: '0',
    title: 'Hut-to-hut treks',
  },
  {
    index: '1',
    title: 'Summits',
  },
  {
    index: '2',
    title: 'Weekend hikes',
  },
];

export default function View({ data, index }: Props) {
  const current = data.gear[Number(index)];

  return (
    <>
      <Header>
        <HeaderEyebrow>[ 01-X02 ]</HeaderEyebrow>
        <HeaderPrefix>Info/</HeaderPrefix>Gear
        <HeaderSubtitle>What I carry on hikes</HeaderSubtitle>
      </Header>
      <nav aria-label="gear filters navigation">
        <ul className={styles.filters}>
          {FILTERS.map((filter) => (
            <li key={filter.index}>
              <Link
                className={styles.link(index === filter.index)}
                href={`/info/gear?ref=${filter.index}`}
              >
                {filter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside>
        <ul className={styles.aside}>
          <li>
            Consumable Weight
            <span className={styles.lid}>
              <Weight weight={current.weightConsumable} />
            </span>
          </li>
          <li>
            Worn Weight
            <span className={styles.lid}>
              <Weight weight={current.weightWorn} />
            </span>
          </li>
          <li>
            Base Weight
            <span className={styles.lid}>
              <Weight weight={current.weightBase} />
            </span>
          </li>
          <li>
            Total Weight
            <span className={styles.lid}>
              <Weight weight={current.weightTotal} />
            </span>
          </li>
        </ul>
      </aside>
      {current.categories.map((category, categoryIndex: number) => (
        <section className={styles.section} key={categoryIndex}>
          <h2 className={styles.heading}>
            <span className={styles.index}>
              [ 00-{padIndex(categoryIndex + 1)} ]
            </span>
            <span>
              {category.title}
              <span className={styles.lid}>
                <Weight weight={category.weight} />
              </span>
            </span>
          </h2>
          <ul className={styles.grid}>
            {category.items.map((item) => (
              <li className={styles.item} key={item.name}>
                <span className={styles.eyebrow}>[ {item.seller} ]</span>
                {item.name}
                <span className={styles.lid}>
                  <Weight isSmall weight={item.weight} />
                </span>
                {item.worn && (
                  <span className={styles.lid}>
                    Worn
                  </span>
                )}
                {item.consumable && (
                  <span className={styles.lid}>
                    Consumable
                  </span>
                )}
                {item.link && (
                  <span className={styles.lid}>
                    <Link href={item.link} target="_blank">
                      <ExternalIcon>View</ExternalIcon>
                    </Link>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <Footer current="/info/gear" />
    </>
  );
}

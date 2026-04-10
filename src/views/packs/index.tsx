import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
import { Weight } from '@/ui/units';

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
    <Content>
      <div className={styles.definition} role="presentation">
        <span>My</span>
        <span>Gear</span>
        <span>Loadouts</span>
      </div>
      <Header>
        <HeaderEyebrow>[ 06 ]</HeaderEyebrow>
        <HeaderText>Packs</HeaderText>
        <HeaderSubtitle>What I carry on hikes</HeaderSubtitle>
      </Header>
      <nav aria-label="gear filters navigation">
        <ul className={styles.filters}>
          {FILTERS.map((filter) => (
            <li key={filter.index}>
              <Link
                className={styles.link(index === filter.index)}
                href={`/packs?ref=${filter.index}`}
              >
                {filter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className={styles.sticky}>
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
            [{category.title}]
            <span className={styles.subheading}>
              <Weight weight={category.weight} />
            </span>
          </h2>
          <ul className={styles.grid}>
            {category.items.map((item) => (
              <li className={styles.item} key={item.name}>
                <Link href={item.link} target="_blank">
                  <span className={styles.eyebrow}>[ {item.seller} ]</span>
                  <ExternalIcon>{item.name}</ExternalIcon>
                  <span className={styles.lid}>
                    <Weight isSmall weight={item.weight} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Content>
  );
}

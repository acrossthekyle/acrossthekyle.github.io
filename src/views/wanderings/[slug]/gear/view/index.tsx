import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderBack, HeaderHeading } from '@/ui/header';
import { Eyebrow, Subtitle, Title } from '@/ui/typography';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <>
      <LayoutHeader>
        <HeaderBack fallback={`/wanderings/${data.slug}`} />
        <HeaderHeading>
          <Eyebrow>
            {data.title.join(' ')}
          </Eyebrow>
          Gear
          <Subtitle>Base Weight: {data.weights.base} lbs</Subtitle>
        </HeaderHeading>
      </LayoutHeader>
      <LayoutMain>
        {data.categories.map((category) => (
          <section className={styles.section} key={category.title}>
            <Title shrink>
              <Eyebrow>Weight: {category.weight} lbs</Eyebrow>
              {category.title}
            </Title>
            <ul className={styles.list}>
              {category.items.map((item, index: number) => (
                <li className={styles.item} key={index}>
                  {!!item.link ? (
                    <Link
                      className={styles.link}
                      href={item.link}
                      target="_blank"
                    >
                      {item.name.join(' ')}
                    </Link>
                  ) : (
                    <>{item.name.join(' ')}</>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}

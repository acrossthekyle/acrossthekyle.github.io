import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow, LinkBackdrop } from '@/ui/link';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';
import { Heading, Small, Strong } from '@/ui/typography';
import { Weight } from '@/ui/units';

import Graph from './graph';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ..
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/gear">
              /gear
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{data.title}</Strong>
        <Small>
          {data.date} • <Weight weight={data.total} />
        </Small>
      </Heading>
      <Graph
        base={data.base}
        consumable={data.consumable}
        slug={data.slug}
        total={data.total}
        type={data.type}
        worn={data.worn}
      />
      {data.categories.map((category) => (
        <Fragment key={category.title}>
          <Heading level={2} id={category.title.replace(' ', '-')}>
            <Strong uppercase>{category.title}</Strong>
            <Small>
              {category.items.length} items • <Weight weight={category.weight} />
            </Small>
          </Heading>
          <Grid>
            <GridList columns={2} id={category.title.replace(' ', '-')}>
              {category.items.map((item, index: number) => (
                <GridListItem key={index}>
                  {!!item.link ? (
                    <LinkBackdrop href={item.link} target="_blank">
                      <Strong>{item.name.join(' ')}</Strong>
                      <Small>
                        <LinkArrow>
                          {item.consumable && `Consumable • `}
                          {item.worn && `Worn • `}
                          {(!item.worn && !item.consumable) && `Base • `}
                          <Weight isSmall weight={item.weight} /> • view
                        </LinkArrow >
                      </Small>
                    </LinkBackdrop>
                  ) : (
                    <>
                      <Strong>{item.name.join(' ')}</Strong>
                      <Small>
                        {item.consumable && `Consumable • `}
                        {item.worn && `Worn • `}
                        {(!item.worn && !item.consumable) && `Base • `}
                        <Weight isSmall weight={item.weight} />
                      </Small>
                    </>
                  )}
                </GridListItem>
              ))}
            </GridList>
          </Grid>
        </Fragment>
      ))}
    </Layout>
  );
}

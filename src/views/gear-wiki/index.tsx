import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

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
            <Link href={`/gear/${data.slug}`}>
              Back
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>
        <strong>Gear wiki</strong>
        <small>Weight categories</small>
      </h1>
      <p>
        When backpackers talk about pack weight, things are split into a handful of categories:
      </p>
      <h3>
        <b>BASE WEIGHT</b>
      </h3>
      <p>
        All the stuff you carry in your backpack that doesn't get used up.
      </p>
      <p>
        Think: tent, sleeping bag, sleeping pad, stove, extra clothes, first aid kit, the backpack itself, etc.
      </p>
      <p>
        If all the gear was laid out before a trip (excluding food, water, or fuel), that pile makes up the base weight. It stays the same from the first day of the trip to the last. That's why experienced backpackers obsess over lowering this number, it's the weight you carry every single mile.
      </p>
      <h3>
        <b>CONSUMABLE WEIGHT</b>
      </h3>
      <p>
        Things that get used up during the trip, such as food, fuel, water, toothpaste, sunscreen, etc. This weight changes constantly. The pack is heaviest on day one when all the food is fresh and the water bottles are full. As you eat and drink, the pack gets lighter. So, consumable weight goes down as the trip goes on.
      </p>
      <h3>
        <b>WORN WEIGHT</b>
      </h3>
      <p>
        Everything you're wearing, and not carrying, minus the backpack which is included in the base weight because it's being carried. These items are separated from the base weight because it's technically not in the pack. Even though it still "counts" in real life, it doesn't affect how heavy the backpack feels on the shoulders.
      </p>
    </Layout>
  );
}

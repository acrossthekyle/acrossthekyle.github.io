import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderBack, HeaderHeading } from '@/ui/header';
import { Eyebrow, Subtitle } from '@/ui/typography';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import Stats from './stats';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <>
      <LayoutHeader>
        <HeaderBack canSkipTo fallback={`/wanderings/${data.slug}/${data.index}`} />
        <HeaderHeading>
          <Eyebrow>
            {data.title.join(' ')}
          </Eyebrow>
          Route + Elevation
          <Subtitle>GPX Data + All Stats</Subtitle>
        </HeaderHeading>
        <Stats gpx={data.gpx} stats={data.stats} termini={data.termini} />
      </LayoutHeader>
      <LayoutMain>
        <Context>
          <Route gpx={data.gpx} isSame={data.termini.isSame} />
          <Elevation gpx={data.gpx} />
        </Context>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}

import { Layout } from '@/layout';
import { LinkBack } from '@/ui/link';

import Context from './context';
import Elevation from './elevation';
import Route from './route';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="trails-and-travels">
      <header>
        <LinkBack href={`/trails-and-travels/${data.slug}/${data.index}`} />
        <h1>
          <strong>
            Route and Elevation
          </strong>
          <small>
            <em>GPX data via GPS Smart Watch</em>
          </small>
        </h1>
      </header>
      <Context>
        <Elevation gpx={data.gpx} stats={data.stats} termini={data.termini} />
        <Route gpx={data.gpx} />
      </Context>
    </Layout>
  );
}

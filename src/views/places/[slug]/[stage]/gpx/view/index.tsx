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
    <Layout group="places">
      <article>
        <LinkBack href={`/places/${data.slug}/${data.index}`} />
        <h2>
          <strong>Route and Elevation</strong>
          <small>GPX data via GPS Smart Watch</small>
        </h2>
        <section aria-label="gpx data">
          <Context>
            <Elevation gpx={data.gpx} stats={data.stats} termini={data.termini} />
            <Route gpx={data.gpx} />
          </Context>
        </section>
      </article>
    </Layout>
  );
}

import { Dialog, Layout } from '@/layout';
import type { Album, FilterBy } from '@/types';

import Albums from './albums';
import Library from './library';

type Props = {
  data: Album[];
  filterBy: FilterBy;
};

export default function View({ data, filterBy }: Props) {
  return (
    <Layout data={data} filterBy={filterBy}>
      <Albums data={data} />
      <Library data={data} filterBy={filterBy} />
      <Dialog />
    </Layout>
  );
}

import { Dialog, Layout } from '@/layout';
import type { Album } from '@/types';

import Albums from './albums';
import Library from './library';

type Props = {
  data: Album[];
};

export default function View({ data }: Props) {
  return (
    <Layout data={data}>
      <Albums data={data} />
      <Library data={data} />
      <Dialog />
    </Layout>
  );
}

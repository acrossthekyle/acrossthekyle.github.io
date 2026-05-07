import { Layout } from '@/layout';
import type { Collection, Data } from '@/types';

import Collections from './collections';
import Library from './library';

type Props = {
  collections: Collection[];
  images: Data[];
};

export default function View({ collections, images }: Props) {
  return (
    <Layout collections={collections}>
      <Collections collections={collections} />
      <Library collections={collections} images={images} />
    </Layout>
  );
}

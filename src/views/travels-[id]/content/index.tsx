import tw from '@/styles';
import type { Collection, Image } from '@/types';

import Overview from './overview';
import Points from './points';
import Snapshots from './snapshots';

type Props = {
  collection: Collection;
  collections: Collection[];
  images: Image[];
};

export default function Content({ collection, collections, images }: Props) {
  return (
    <section aria-label="content" className={styles.container}>
      <Overview notes={collection.notes} />
      <Points collections={collections} />
      <Snapshots collection={collection.id} images={images} />
    </section>
  );
};

const styles = tw({
  container: `
    flex flex-col
    col-span-1 order-2

    sm:order-1
    lg:overflow-y-auto
    lg:min-h-svh
  `,
});

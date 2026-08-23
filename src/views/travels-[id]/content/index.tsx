import tw from '@/styles';
import type { Collection, Image, Timeline as TimelineType } from '@/types';

import Overview from './overview';
import Timeline from './timeline';
import Snapshots from './snapshots';

type Props = {
  collection: Collection;
  images: Image[];
  timeline?: TimelineType[];
};

export default function Content({
  collection,
  images,
  timeline,
}: Props) {
  return (
    <section aria-label="content" className={styles.container}>
      <Overview notes={collection.notes} />
      <Timeline timeline={timeline} />
      <Snapshots images={images} />
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

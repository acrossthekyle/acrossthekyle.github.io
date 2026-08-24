import tw from '@/styles';
import type { Data, Image, Timeline as TimelineType } from '@/types';

import Overview from './overview';
import Timeline from './timeline';
import Snapshots from './snapshots';

type Props = {
  images: Image[];
  timeline?: TimelineType[];
  travel: Data;
};

export default function Content({
  travel,
  images,
  timeline,
}: Props) {
  return (
    <section aria-label="content" className={styles.container}>
      <Overview notes={travel.notes} />
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

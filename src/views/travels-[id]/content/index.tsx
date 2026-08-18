import tw from '@/styles';
import type { Collection, Image } from '@/types';

import Gallery from './gallery';
import Header from './header';
import Others from './others';

type Props = {
  collection: string;
  images: Image[];
  next: Collection;
  previous: Collection;
};

export default function Content({ collection, images, next, previous }: Props) {
  return (
    <section aria-label="images" className={styles.container}>
      <Header total={images.length} />
      <Gallery collection={collection} images={images} />
      <Others next={next} previous={previous} />
    </section>
  );
};

const styles = tw({
  container: `
    flex flex-col
    col-span-1 order-2
    border-t border-current/12.5

    sm:order-1
    lg:border-t-0
    lg:overflow-y-auto
    lg:min-h-svh
  `,
});

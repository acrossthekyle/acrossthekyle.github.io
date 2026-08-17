import tw from '@/styles';
import type { Image } from '@/types';

import Gallery from './gallery';
import Header from './header';

type Props = {
  collection: string;
  images: Image[];
};

export default function Content({ collection, images }: Props) {
  return (
    <section aria-label="images" className={styles.container}>
      <Header total={images.length} />
      <Gallery collection={collection} images={images} />
    </section>
  );
};

const styles = tw({
  container: `
    col-span-1 order-2

    sm:order-1
    lg:overflow-y-auto
  `,
});

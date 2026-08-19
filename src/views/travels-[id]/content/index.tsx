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
    flex flex-col
    col-span-1 order-2
    border-t border-current/12.5

    sm:order-1
    lg:border-t-0
    lg:overflow-y-auto
    lg:min-h-svh
  `,
});

import tw from '@/styles';
import type { Image } from '@/types';
import Ui from '@/ui';

type Props = {
  image: Image;
  isExpanded: boolean;
};

export default function Image({ image, isExpanded }: Props) {
  return (
    <Ui.Image
      className={styles.container(isExpanded)}
      src={image.src}
      thumb={image.thumb}
    />
  );
};

const styles = tw({
  container: (isExpanded: boolean) => tw(`
    ${isExpanded ? 'grayscale-0' : 'grayscale'}

    motion-safe:duration-500

    group-hover:grayscale-0
  `),
});

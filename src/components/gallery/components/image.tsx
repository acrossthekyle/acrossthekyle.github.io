import tw, { cs } from '@/styles';
import type { Image } from '@/types';
import Ui from '@/ui';

type Props = {
  image: Image;
  isActive: boolean;
  isExpanded: boolean;
};

export default function Image({ image, isActive, isExpanded }: Props) {
  return (
    <Ui.Image
      className={
        cs(
          styles.container,
          isActive && styles.active,
          !isActive && styles.stale,
          isExpanded && styles.expanded,
        )
      }
      size={isExpanded ? 'large' : undefined}
      src={image.src}
      thumb={image.thumb}
    />
  );
};

const styles = tw({
  container: `
    motion-safe:duration-500

    group-hover:grayscale-0
  `,
  active: `
    grayscale-0
  `,
  stale: `
    grayscale
  `,
  expanded: `
    aspect-video
    !h-auto
  `,
});

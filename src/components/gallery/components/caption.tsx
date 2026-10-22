import tw, { cs } from '@/styles';
import type { Image } from '@/types';

type Props = {
  image: Image;
  isExpanded: boolean;
};

export default function Caption({ image, isExpanded }: Props) {
  return (
    <span
      className={
        cs(
          styles.container,
          !isExpanded && styles.overlayed,
          isExpanded && styles.inlayed,
        )
      }
    >
      <span className={styles.title}>{image.title}</span>
      {image.when && (
        <span className={styles.sub}>{image.when}</span>
      )}
    </span>
  );
};

const styles = tw({
  container: `
    absolute left-4 bottom-4 right-4
    flex flex-col
    text-xs
    uppercase

    landscape-constrained:!text-white

    sm:text-tiny
  `,
  title: `
    font-black
    truncate
    pr-12
  `,
  sub: `
    opacity-75
  `,
  overlayed: `
    text-white
  `,
  inlayed: `
    px-0

    landscape-constrained:px-0

    md:px-8
    lg:px-20
  `,
});

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
      <span
        className={
          cs(
            styles.title,
            isExpanded && styles.centered,
          )
        }
      >
        {image.title}
      </span>
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
  centered: `
    !pr-0
  `,
  sub: `
    opacity-75
  `,
  overlayed: `
    text-white
  `,
  inlayed: `
    text-center
  `,
});

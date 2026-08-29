import tw from '@/styles';
import type { Image } from '@/types';

type Props = {
  image: Image;
};

export default function Caption({ image }: Props) {
  return (
    <span className={styles.container}>
      <span className={styles.title}>{image.title}</span>
      <span className={styles.sub}>{image.when}</span>
    </span>
  );
};

const styles = tw({
  container: `
    absolute left-4 bottom-4
    flex flex-col
    text-xs text-white
    uppercase
    whitespace-nowrap

    sm:text-tiny
  `,
  title: `
    font-black
  `,
  sub: `
    opacity-75
  `,
});

import tw from '@/styles';
import Ui from '@/ui';

type Props = {
  src: string;
};

export default function Image({ src }: Props) {
  return (
    <Ui.Image className={styles.image} size="large" src={src} />
  );
};

const styles = tw({
  image: `
    grayscale
    mask-t-from-80% mask-t-to-100%

    sm:mask-none
  `,
});

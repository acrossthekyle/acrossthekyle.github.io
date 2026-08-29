import tw from '@/styles';
import Ui from '@/ui';
import { image } from '@/utils';

export default function Figure() {
  return (
    <figure className={styles.container}>
      <Ui.Image
        className={styles.image}
        size="large"
        src={image('3eb59a8f-eaee-429c-86bf-789e98d39ad2', 'me')}
      />
    </figure>
  );
};

const styles = tw({
  container: `
    relative z-0
    col-span-1 order-1

    sm:fixed
    sm:top-0
    sm:right-0
    sm:bottom-0
    sm:w-1/2
    lg:relative
    lg:top-auto
    lg:right-auto
    lg:bottom-auto
    lg:w-full
    lg:order-2
  `,
  image: `
    grayscale brightness-70
    mask-t-from-80% mask-t-to-100%

    dark:brightness-80

    sm:mask-none
  `,
});

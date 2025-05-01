import Styles from '@/styles';

import Image from '../image';

const scss = Styles.Components.Post.Hero;

type Props = {
  image: string;
};

function Hero({ image }: Props) {
  return (
    <figure className={scss.container}>
      <Image
        alt="hero"
        canTransform={false}
        height={1080}
        sizes="80vw"
        src={image}
        width={1920}
      />
    </figure>
  );
}

export default Hero;

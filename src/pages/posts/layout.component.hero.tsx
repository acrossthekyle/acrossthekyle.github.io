import Components from '@/components';
import Styles from '@/styles';

const scss = Styles.Pages.Posts.LayoutComponentHero;

type Props = {
  image: string;
};

function Hero({ image }: Props) {
  return (
    <div className={scss.hero}>
      <Components.Image
        alt="hero"
        canTransform={false}
        height={1080}
        sizes="80vw"
        src={image}
        width={1920}
      />
    </div>
  );
}

export default Hero;

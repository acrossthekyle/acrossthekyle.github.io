import Styles from '@/styles';

import Image from '../image';
import Zoom from './zoom';

const scss = Styles.Components.Posts.Gallery;

type Props = {
  images: string[];
  title: string;
};

function Gallery({ images, title }: Props) {
  if (images.length > 3) {
    throw new Error('The maximum number of images is three');
  }

  return (
    <figure
      className={scss.figure}
      data-multiple={images.length > 1}
      data-no-title={title.trim() === ''}
      data-overflow={images.length > 2}
    >
      {images.map((image, index) => (
        <div className={scss.image} key={image}>
          <Zoom height={1080} sizes="50vw" src={image} width={1920} />
        </div>
      ))}
      {!!title && <figcaption className={scss.caption}>{title}</figcaption>}
    </figure>
  );
}

export default Gallery;

import Styles from '@/styles';

import Image from '../image';

import Zoom from './gallery.zoom';

const scss = Styles.Components.Post.Gallery;

type Props = {
  images: string | string[];
  title: string;
};

function Gallery({ images, title }: Props) {
  const items = Array.isArray(images) ? images : [images];

  if (items.length > 3) {
    throw new Error('The maximum number of images is three');
  }

  return (
    <figure
      className={scss.figure}
      data-multiple={items.length > 1}
      data-no-title={title.trim() === ''}
      data-overflow={items.length > 2}
    >
      {items.map((image, index) => (
        <div className={scss.image} key={image}>
          <Zoom height={1080} sizes="50vw" src={image} width={1920} />
        </div>
      ))}
      {!!title && <figcaption className={scss.caption}>{title}</figcaption>}
    </figure>
  );
}

export default Gallery;

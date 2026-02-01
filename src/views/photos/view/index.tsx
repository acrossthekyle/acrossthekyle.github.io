import { Layout } from '@/layout';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import { IMAGES } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="photos">
      <section>
        <h2>
          <strong>Photos</strong>
          <small>Snapshots from life</small>
        </h2>
        <p>
          I use my phone to capture moments from everyday life, the vibrant city around me, and sights from the trails.
        </p>
      </section>
      <section aria-label="gallery">
        {IMAGES.map(({ caption, src }) => (
          <ImageFigure className={styles.figure} key={src}>
            <Image
              alt=""
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={src}
              width={1920}
            />
            <ImageCaption>{caption}</ImageCaption>
          </ImageFigure>
        ))}
      </section>
    </Layout>
  );
}

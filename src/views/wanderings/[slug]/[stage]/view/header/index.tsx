import {
  Image,
  ImageCaption,
  ImageInfo,
  ImageFigure,
  ImageMaximize,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  date: string;
  image?: string;
  title: string[];
};

export default function Header({ date, image, title }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.eyebrow}>
          {date}
        </span>
        {title.map((word, index) => (
          <span className={styles.line} key={index}>
            {word}
          </span>
        ))}
      </h1>
      {image && (
        <ImageFigure>
          <Image
            alt=""
            color
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image}
            width={1920}
          >
            <ImageCaption>
              <ImageInfo>
                Shot on iPhone
              </ImageInfo>
            </ImageCaption>
            <ImageMaximize />
          </Image>
        </ImageFigure>
      )}
    </header>
  );
}

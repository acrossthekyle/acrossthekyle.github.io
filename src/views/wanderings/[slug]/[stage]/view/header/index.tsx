import {
  Image,
  ImageCaption,
  ImageInfo,
  ImageFigure,
  ImageMaximize,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  eyebrow: string;
  hasStats?: boolean;
  hero?: string;
  onStatsClick?: () => void;
  title: string[];
};

export default function Header({
  eyebrow,
  hasStats,
  hero,
  onStatsClick,
  title,
}: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
        {title.map((word, index) => (
          <span className={styles.line} key={index}>
            {word}
          </span>
        ))}
      </h1>
      {hasStats && (
        <button
          className={styles.stats}
          onClick={onStatsClick}
          type="button"
        >
          View Route + Stats
        </button>
      )}
      {hero && (
        <ImageFigure className={styles.image}>
          <Image
            alt=""
            color
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={hero}
            width={1920}
          >
            <ImageCaption className={styles.caption}>
              <ImageInfo>
                Click for Fullscreen
              </ImageInfo>
            </ImageCaption>
            <ImageMaximize />
          </Image>
        </ImageFigure>
      )}
    </header>
  );
}

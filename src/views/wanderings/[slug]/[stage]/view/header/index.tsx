import {
  Image,
  ImageMaximize,
} from '@/ui/image';

import styles from './stylesheet';

type Props = {
  date: string;
  image?: string;
  label?: string;
  stage: string;
  title: string;
};

export default function Header({ date, image, label, stage, title }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.lid}>
          {label} {stage}
        </span>
        {title}
        <span className={styles.time}>
          {date}
        </span>
      </h1>
      {image && (
        <div className="relative">
          <Image
            alt=""
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image}
            width={1920}
          >
            <ImageMaximize />
          </Image>
        </div>
      )}
    </header>
  );
}

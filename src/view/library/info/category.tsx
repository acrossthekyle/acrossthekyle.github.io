import styles from './stylesheet';

type Props = {
  collections: number;
  images: number;
};

export default function Category({ collections, images }: Props) {
  return (
    <h1 className={styles.header}>
      <small className={styles.subheader}>
        {images} Photos
        <span className={styles.divider}>•</span>
        {collections} Collection{collections > 1 ? 's' : ''}
      </small>
    </h1>
  );
}

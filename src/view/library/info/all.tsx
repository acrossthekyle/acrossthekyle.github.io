import styles from './stylesheet';

type Props = {
  collections: number;
  images: number;
};

export default function All({ collections, images }: Props) {
  return (
    <h1 className={styles.header}>
      <small className={styles.subheader}>
        {images} Photos
        <span className={styles.divider}>•</span>
        {collections} Collections
      </small>
    </h1>
  );
}

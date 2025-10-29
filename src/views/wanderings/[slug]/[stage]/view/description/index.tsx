import styles from './stylesheet';

type Props = {
  description: string[];
};

export default function Description({ description }: Props) {
  return (
    <div className={styles.content}>
      {description.map((paragraph, index) => (
        <p className={styles.paragraph} key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

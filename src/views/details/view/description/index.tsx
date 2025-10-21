import styles from './stylesheet';

type Props = {
  description: string[];
};

export default function Description({ description }: Props) {
  if (description.length <= 0) {
    return null;
  }

  return (
    <section className={styles.content}>
      <h2 className={styles.heading}>
        Trip Report
      </h2>
      {description.map((paragraph, index) => (
        <p className={styles.paragraph} key={index}>{paragraph}</p>
      ))}
    </section>
  );
}

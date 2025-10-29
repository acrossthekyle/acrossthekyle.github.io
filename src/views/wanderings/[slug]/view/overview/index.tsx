import styles from './stylesheet';

type Props = {
  description: string[];
};

export default function Overview({ description }: Props) {
  if (description.length === 0) {
    return null;
  }

  return (
    <section aria-label="overview" className={styles.section} id="overview">
      {description.map((paragraph) => (
        <p className={styles.content} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}

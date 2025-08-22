import styles from './stylesheet';

type Props = {
  description: string[];
};

export default function Description({ description }: Props) {
  return (
    <>
      {description.map((paragraph, index: number) => (
        <p className={styles.paragraph} key={index}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

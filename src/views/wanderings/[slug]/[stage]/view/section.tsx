import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  heading?: string;
};

export default function Section({ children, heading }: Props) {
  return (
    <section>
      {heading && (
        <h2 className={styles.heading}>{heading}</h2>
      )}
      {children}
    </section>
  );
}

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  heading: string;
};

export default function Section({ children, heading }: Props) {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.right}>
          {children}
        </div>
      </div>
    </section>
  );
}

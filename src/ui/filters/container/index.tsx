import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function FilterContainer({ children }: Props) {
  return (
    <section className={styles.container}>
      <ul className={styles.items}>
        {children}
      </ul>
    </section>
  );
}

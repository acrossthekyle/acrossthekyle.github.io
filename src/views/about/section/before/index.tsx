import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
};

export default function Before({ children, id }: Props) {
  return (
    <section aria-labelledby={id} className={styles.container}>
      {children}
    </section>
  );
}

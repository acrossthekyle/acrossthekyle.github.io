import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}

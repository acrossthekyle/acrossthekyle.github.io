import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function Count({ children }: Props) {
  return (
    <span className={styles.count}>
      {children}
    </span>
  );
}

import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function DirectoryItems({ children }: Props) {
  return (
    <ul className={styles.items}>
      {children}
    </ul>
  );
}

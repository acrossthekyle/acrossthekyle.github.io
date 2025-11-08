import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
};

export default function MenuInfo({ children }: Props) {
  return (
    <span className={styles.info}>
      {children}
    </span>
  );
}

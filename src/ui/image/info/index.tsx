import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Info({ children }: Props) {
  return (
    <span className={styles.info}>
      {children}
    </span>
  );
}

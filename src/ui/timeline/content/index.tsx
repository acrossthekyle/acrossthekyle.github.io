import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Content({ children }: Props) {
  return (
    <p className={styles.container}>
      {children}
    </p>
  );
}

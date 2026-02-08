import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <ol aria-label="timeline" className={styles.container}>
      {children}
    </ol>
  );
}

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Subtitle({ children }: Props) {
  return (
    <small className={styles.container}>
      {children}
      <span className={styles.dots} role="presentation">
        {' '}...................................................................
      </span>
    </small>
  );
}

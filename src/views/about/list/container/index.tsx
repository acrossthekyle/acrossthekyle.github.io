import styles from './stylesheet';

type Props = {
  a11yLabel?: string;
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ a11yLabel, children }: Props) {
  return (
    <ul aria-label={a11yLabel} className={styles.container}>
      {children}
    </ul>
  );
}

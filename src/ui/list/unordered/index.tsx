import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  labelledBy?: string;
};

export default function Container({ children, labelledBy }: Props) {
  return (
    <ul aria-labelledby={labelledBy} className={styles.container}>
      {children}
    </ul>
  );
}

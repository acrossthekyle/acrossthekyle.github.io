import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  labelledBy?: string;
};

export default function After({ children, labelledBy }: Props) {
  return (
    <section aria-labelledby={labelledBy} className={styles.container}>
      {children}
    </section>
  );
}

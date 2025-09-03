import styles from './stylesheet';

type Props = {
  a11yLabel?: string;
  children: React.ReactNode | React.ReactNode[];
  id?: string;
};

export default function Container({ a11yLabel, children, id }: Props) {
  return (
    <section aria-label={a11yLabel} className={styles.container} id={id}>
      {children}
    </section>
  );
}

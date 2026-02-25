import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Figure({ children }: Props) {
  return (
    <figure className={styles.container}>
      {children}
    </figure>
  );
}

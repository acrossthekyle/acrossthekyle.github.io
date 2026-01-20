import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Caption({ children }: Props) {
  return (
    <figcaption className={styles.container}>
      {children}
    </figcaption>
  );
}

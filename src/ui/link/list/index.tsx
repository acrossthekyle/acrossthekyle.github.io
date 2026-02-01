import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function List({ children }: Props) {
  return (
    <ul className={styles.container}>
      {children}
    </ul>
  );
}

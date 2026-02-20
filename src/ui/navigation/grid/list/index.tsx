import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  columns: number;
  id: string;
};

export default function List({ children, columns, id }: Props) {
  return (
    <ul aria-labelledby={id} className={styles.container(columns)}>
      {children}
    </ul>
  );
}

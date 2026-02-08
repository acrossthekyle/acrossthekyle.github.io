import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
};

export default function Title({ children, id }: Props) {
  return (
    <h3 className={styles.container} id={id}>
      {children}
    </h3>
  );
}

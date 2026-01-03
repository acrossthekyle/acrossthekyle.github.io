import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
};

export default function Content({ children, id }: Props) {
  return (
    <h2 className={styles.text} id={id}>
      {children}
    </h2>
  );
}

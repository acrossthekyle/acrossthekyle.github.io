import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
};

export default function Heading({ children, id }: Props) {
  return (
    <h4 className={styles.container} id={id}>
      {children}
    </h4>
  );
}

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Heading({ children }: Props) {
  return (
    <h3 className={styles.container}>
      {children}
    </h3>
  );
}

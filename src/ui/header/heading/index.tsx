import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Heading({ children }: Props) {
  return (
    <h1 className={styles.container} id="main-heading">
      {children}
    </h1>
  );
}

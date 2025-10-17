import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Heading({ children }: Props) {
  return (
    <h5 className={styles.heading}>
      {children}
    </h5>
  );
}

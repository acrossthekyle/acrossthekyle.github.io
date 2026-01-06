import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
};

export default function Title({ children, className, id }: Props) {
  return (
    <h2 className={`${styles.container} ${className || ''}`.trim()} id={id}>
      {children}
    </h2>
  );
}

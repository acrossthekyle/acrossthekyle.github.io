import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
  shrink?: boolean;
};

export default function Title({ children, className, id, shrink }: Props) {
  return (
    <h2
      className={`${styles.container(shrink)} ${className || ''}`.trim()}
      id={id}
    >
      {children}
    </h2>
  );
}

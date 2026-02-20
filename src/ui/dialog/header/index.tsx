import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Header({ children, className = '' }: Props) {
  return (
    <h2
      className={`${styles.container} ${className}`.trim()}
      id="dialog-header"
    >
      {children}
    </h2>
  );
}

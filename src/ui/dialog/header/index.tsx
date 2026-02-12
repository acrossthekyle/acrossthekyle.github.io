import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Header({ children, className }: Props) {
  return (
    <h2
      className={className ?? styles.container}
      id="dialog-header"
    >
      {children}
    </h2>
  );
}

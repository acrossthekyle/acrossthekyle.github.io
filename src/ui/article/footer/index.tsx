import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export default function Footer({ children, className }: Props) {
  return (
    <footer className={`${styles.container} ${className || ''}`.trim()}>
      {children}
    </footer>
  );
}

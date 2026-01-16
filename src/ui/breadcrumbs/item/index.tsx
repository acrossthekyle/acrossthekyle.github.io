import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  className?: string;
  role?: string;
};

export default function Item({ children, className = '', ...rest }: Props) {
  return (
    <li className={`${styles.container} ${className}`.trim()} {...rest}>
      {children}
    </li>
  );
}

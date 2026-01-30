import styles from './stylesheet';

type Props = {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  role?: string;
};

export default function Item({
  children,
  className = '',
  highlight,
  ...rest
}: Props) {
  return (
    <li
      className={`${styles.container(highlight)} ${className}`.trim()}
      {...rest}
    >
      {children}
    </li>
  );
}

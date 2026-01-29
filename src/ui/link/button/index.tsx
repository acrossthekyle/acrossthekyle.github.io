import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  href: string;
};

export default function Button({
  children,
  className = '',
  href,
  ...rest
}: Props) {
  return (
    <Link
      className={`${styles.container} ${className}`.trim()}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}

import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  href: string;
  target?: string;
};

export default function Button({
  children,
  className = '',
  href,
  target,
  ...rest
}: Props) {
  return (
    <Link
      className={`${styles.container} ${className}`.trim()}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </Link>
  );
}

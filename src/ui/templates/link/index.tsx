import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  href: string;
  onClick: () => void;
};

export default function Anchor({
  children,
  href,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      className={styles.container}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

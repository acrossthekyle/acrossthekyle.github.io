import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  href?: string;
  title?: string;
};

export default function Link({ children, href, title }: Props) {
  if (href === undefined) {
    return (
      <>{children}</>
    );
  }

  return (
    <NextJsLink className={styles.link} href={href} title={title}>
      {children}
      <span className={styles.hint}>View Details</span>
    </NextJsLink>
  );
}

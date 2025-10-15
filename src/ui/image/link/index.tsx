import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  href?: string;
};

export default function Link({ children, href }: Props) {
  if (href === undefined) {
    return (
      <>{children}</>
    );
  }

  return (
    <NextJsLink className={styles.link} href={href}>
      {children}
    </NextJsLink>
  );
}

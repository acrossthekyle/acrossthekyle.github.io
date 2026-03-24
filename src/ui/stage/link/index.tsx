import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  href?: string;
};

export default function Link({ children, href }: React.PropsWithChildren<Props>) {
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

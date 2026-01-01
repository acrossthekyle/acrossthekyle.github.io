import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  href?: string;
  id?: string;
  title?: string;
};

export default function Link({ children, href, id, title }: Props) {
  if (href === undefined) {
    return (
      <>{children}</>
    );
  }

  return (
    <NextJsLink className={styles.link} href={href} id={id} title={title}>
      {children}
    </NextJsLink>
  );
}

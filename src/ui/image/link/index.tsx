import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  href?: string;
  label?: string;
  title?: string;
};

export default function Link({ children, href, label, title }: Props) {
  if (href === undefined) {
    return (
      <>{children}</>
    );
  }

  return (
    <NextJsLink aria-label={label} className={styles.link} href={href} title={title}>
      {children}
    </NextJsLink>
  );
}

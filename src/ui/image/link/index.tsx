import NextJsLink from 'next/link';

import styles from './stylesheet';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  href: string;
};

export default function Link({ children, href }: Props) {
  return (
    <NextJsLink className={styles.action} href={href}>
      {children}
    </NextJsLink>
  );
}

import { ArrowUpRight } from 'lucide-react';
import NextJsLink from 'next/link';

import styles from './stylesheet';

export default function Link({ children, href, isExternal }: Props) {
  return (
    <NextJsLink
      className={styles.container}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}{isExternal && <ArrowUpRight className={styles.icon} />}
    </NextJsLink>
  );
}

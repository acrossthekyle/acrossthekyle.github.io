import Link from 'next/link';

import { ExternalIcon } from '@/ui/link';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  href: string;
  index: number;
  subtitle: string;
  title: string;
};

export default function Anchor({ href, index, subtitle, title }: Props) {
  const isExternal = href.includes('http') || href.includes('mailto');

  return (
    <Link className={styles.link} href={href}>
      <span className={styles.eyebrow}>
        [ {padIndex(index + 1)} ]
      </span>
      {isExternal ? <ExternalIcon>{title}</ExternalIcon> : <>{title}</>}
      <span className={styles.lid}>{subtitle}</span>
    </Link>
  );
}

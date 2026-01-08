import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  className?: string;
  href: string;
  text: string;
};

export default function More({ className, href, text }: Props) {
  return (
    <>
      <Link
        className={`${styles.container} ${className || ''}`.trim()}
        href={href}
      >
        {text}
      </Link>.
    </>
  );
}

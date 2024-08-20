import { ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/link.module.scss';

type Props = {
  className?: string;
  text: string | ReactNode;
  url: string;
};

function Internal({ className = '', text, url }) {
  return (
    <Link className={`${styles.link} ${className}`.trim()} href={url}>
      {text}
    </Link>
  );
}

export default Internal;

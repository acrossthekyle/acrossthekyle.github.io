import { ReactNode } from 'react';

import styles from '@/styles/ui/link.module.scss';

import ArrowIcon from './icons/arrow';

type Props = {
  className?: string;
  text: string | ReactNode | ReactNode[];
  title?: string;
  url: string;
};

function External({ className, text, title, url }: Props) {
  return (
    <a
      className={`${styles.link} ${className || ''}`.trim()}
      href={url}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {text}
      <ArrowIcon className={styles.rotated} right />
    </a>
  );
}

export default External;

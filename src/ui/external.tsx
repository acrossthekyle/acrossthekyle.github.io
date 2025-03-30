import { ReactNode } from 'react';

import styles from '@/styles/ui/link.module.scss';

import ArrowIcon from './icons/arrow';

type Props = {
  className?: string;
  hasArrow?: boolean;
  text: string | ReactNode | ReactNode[];
  title?: string;
  url: string;
};

function External({
  className,
  hasArrow = true,
  text,
  title,
  url,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      className={`${styles.link} ${className || ''}`.trim()}
      href={url}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {text}
      {hasArrow && <ArrowIcon className={styles.rotated} right />}
    </a>
  );
}

export default External;

import { ReactNode } from 'react';

import Images from '@/images';
import styles from '@/styles/components/shortcuts/external.module.scss';

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
      {hasArrow && <Images.Icons.Arrow className={styles.rotated} right />}
    </a>
  );
}

export default External;

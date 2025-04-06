import { ReactNode } from 'react';

import Images from '@/images';
import Styles from '@/styles';

const scss = Styles.Components.Shortcuts.External;

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
      className={`${scss.link} ${className || ''}`.trim()}
      href={url}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {text}
      {hasArrow && <Images.Icons.Arrow className={scss.rotated} right />}
    </a>
  );
}

export default External;

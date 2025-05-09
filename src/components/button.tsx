import { ReactNode } from 'react';
import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';

const scss = Styles.Components.Button;

type Props = {
  className?: string;
  href?: string;
  id?: string;
  mode?: string;
  onClick?: () => void;
  text: string | ReactNode;
  title?: string;
  type?: 'button' | 'reset' | 'submit';
};

function Button({
  className = '',
  href,
  onClick,
  mode = 'primary',
  text,
  type = 'button',
  ...rest
}: Props) {
  if (onClick) {
    return (
      <button
        className={`${scss.button} ${className}`.trim()}
        data-mode={mode}
        onClick={onClick}
        type={type}
        {...rest}
      >
        {text}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        className={`${scss.button} ${className}`.trim()}
        data-mode={mode}
        href={href}
        target={href.includes('http') ? '_blank' : '_self'}
        {...rest}
      >
        {text}
        {href.includes('http') && <Images.Icons.Arrow right />}
      </Link>
    );
  }

  return null;
}

export default Button;

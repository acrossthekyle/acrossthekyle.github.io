import { ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/button.module.scss';

import ArrowIcon from './icons/arrow';

type Props = {
  className?: string;
  href?: string;
  id?: string;
  mode?: string;
  onClick?: () => void;
  text: string | ReactNode;
};

function Button({
  className = '',
  href,
  onClick,
  mode = 'primary',
  text,
  ...rest
}: Props) {
  if (onClick) {
    return (
      <button
        className={`${styles.button} ${className}`.trim()}
        data-mode={mode}
        onClick={onClick}
        type="button"
        {...rest}
      >
        {text}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        className={`${styles.button} ${className}`.trim()}
        data-mode={mode}
        href={href}
        target={href.includes('http') ? '_blank' : '_self'}
        {...rest}
      >
        {text}
        {href.includes('http') && <ArrowIcon right />}
      </Link>
    );
  }

  return null;
}

export default Button;

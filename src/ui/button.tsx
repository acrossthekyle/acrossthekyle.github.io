import { ReactNode } from 'react';
import Link from 'next/link';

import styles from '@/styles/ui/button.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  style?: object;
  text: string | ReactNode;
};

function Button({
  className = '',
  disabled,
  href,
  onClick,
  style,
  text,
}: Props) {
  if (onClick) {
    return (
      <button
        className={`${styles.button} ${className}`.trim()}
        disabled={disabled}
        onClick={onClick}
        style={style}
        type="button"
      >
        {text}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        className={`${styles.button} ${className}`.trim()}
        href={href}
        style={style}
        target={href.includes('http') ? '_blank' : '_self'}
      >
        {text}
      </Link>
    );
  }

  return null;
}

export default Button;

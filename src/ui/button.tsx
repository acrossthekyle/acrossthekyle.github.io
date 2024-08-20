import Link from 'next/link';

import styles from '@/styles/ui/button.module.scss';

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
  text: string;
};

function Button({ className = '', href, onClick, text }: Props) {
  if (onClick) {
    return (
      <button
        className={`${styles.button} ${className}`.trim()}
        onClick={onClick}
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
        target={href.includes('http') ? '_blank' : '_self'}
      >
        {text}
      </Link>
    );
  }

  return null;
}

export default Button;

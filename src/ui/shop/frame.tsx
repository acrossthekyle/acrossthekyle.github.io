import { ReactNode } from 'react';

import styles from '@/styles/ui/shop/frame.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  mode: string;
};

function Frame({ children, className = '', mode }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.frame} ${className}`.trim()}
      data-mode={mode}
    >
      {children}
    </div>
  );
}

export default Frame;

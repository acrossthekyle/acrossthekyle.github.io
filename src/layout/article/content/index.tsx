import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

type Props = {
  className?: string;
};

export default function Content({
  children,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}

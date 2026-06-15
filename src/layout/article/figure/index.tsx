import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

type Props = {
  className?: string;
};

export default function Figure({
  children,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <figure className={`${styles.container} ${className}`.trim()}>
      {children}
    </figure>
  );
}

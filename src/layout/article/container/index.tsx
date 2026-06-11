import { PropsWithChildren } from 'react';

import { styles } from './stylesheet';

type Props = {
  stack?: boolean;
};

export default function Article({ children, stack }: PropsWithChildren<Props>) {
  return (
    <article className={styles.container(stack)}>
      {children}
    </article>
  );
}

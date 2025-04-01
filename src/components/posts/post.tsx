'use client';

import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

import styles from '@/styles/components/posts/post.module.scss';

type Props = {
  children: ReactNode | ReactNode[];
};

function Post({ children }: Props) {
  return (
    <InView threshold={0.01} triggerOnce>
      {({ inView, ref }) => (
        <div className={styles.wrapper} data-in-view={inView} ref={ref}>
          <div className={styles.content}>
            {children}
            <div data-backdrop data-backdrop-active="false" />
          </div>
        </div>
      )}
    </InView>
  );
}

export default Post;

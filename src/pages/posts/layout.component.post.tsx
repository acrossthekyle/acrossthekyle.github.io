import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

import Styles from '@/styles';

const scss = Styles.Pages.Posts.LayoutComponentPost;

type Props = {
  children: ReactNode | ReactNode[];
};

function Post({ children }: Props) {
  return (
    <InView threshold={0.01} triggerOnce>
      {({ inView, ref }) => (
        <div className={scss.wrapper} data-in-view={inView} ref={ref}>
          <div className={scss.content}>
            {children}
            <div data-backdrop data-backdrop-active="false" />
          </div>
        </div>
      )}
    </InView>
  );
}

export default Post;

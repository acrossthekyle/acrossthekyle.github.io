import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Components from '@/components';
import scss from '@/styles/pages/404.module.scss';

type Props = Record<string, never>;

export const getStaticProps: GetStaticProps<Props> = () => {
  return { props: {} };
};

export default function Custom404() {
  const { asPath } = useRouter();

  return (
    <Components.View title="Page not found">
      <div className={scss.container}>
        <h1>404</h1>
        <p>
          Once upon a midnight dreary,
          <br />
          While I web surfed, weak and weary,
          <br />
          For pages long forgotten yore.
          <br />
          When I clicked my fav'rite href,
          <br />
          Suddenly there came a warning,
          <br />
          and my heart was filled with mourning,
          <br />
          Mourning for my dear {asPath},<br />
          "Tis not possible!", I muttered,
          <br />
          "Give thine pages, I emplore!"
          <br />
          Quoth the server, <strong>404</strong>.
        </p>
      </div>
    </Components.View>
  );
}

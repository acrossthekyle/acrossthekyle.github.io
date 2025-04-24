import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import Components from '@/components';
import scss from '@/styles/pages/404.module.scss';

type Props = Record<string, never>;

const CONTENT = [
  `Once upon a midnight dreary,`,
  `While I web surfed, weak and weary,`,
  `For pages long forgotten yore.`,
  `When I clicked my fav'rite href,`,
  `Suddenly there came a warning,`,
  `and my heart was filled with mourning,`,
  `Mourning for my dear {asPath},`,
  `"Tis not possible!", I muttered,`,
  `"Give thine pages, I emplore!"`,
  `Quoth the server, 404.`,
];

export const getStaticProps: GetStaticProps<Props> = () => {
  return { props: {} };
};

export default function Custom404() {
  const { asPath } = useRouter();

  return (
    <Components.View
      metadata={{
        description: CONTENT.join(' '),
        title: 'Page not found',
        url: '/404',
      }}
    >
      <div className={scss.container}>
        <h1>404</h1>
        <p>
          {CONTENT.map((text) => (
            <Fragment key={text}>
              {text}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    </Components.View>
  );
}

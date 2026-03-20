import { Layout } from '@/layout';
import { Heading, Small, Strong } from '@/ui/typography';

export default function View() {
  return (
    <Layout>
      <Heading>
        <Strong>404</Strong>
        <Small>
          Page not found
        </Small>
      </Heading>
      <article>
        <Heading level={2}>
          <Strong>Once upon a midnight dreary</Strong>
        </Heading>
        <p>
          While I web surfed, weak and weary,<br />
          For pages long forgotten yore.<br />
          When I clicked my fav'rite href,<br />
          Suddenly there came a warning,<br />
          and my heart was filled with mourning,<br />
          Mourning for my dear missing page,<br />
          "Tis not possible!", I muttered,<br />
          "Give thine pages, I emplore!"<br />
          Quoth the server, 404.
        </p>
      </article>
    </Layout>
  );
}

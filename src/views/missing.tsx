import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>404</strong>
        <small>Page not found</small>
      </h1>
      <article>
        <h2>
          <strong>Once upon a midnight dreary,</strong>
        </h2>
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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}

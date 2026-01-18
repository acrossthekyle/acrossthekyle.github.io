import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

export default function View() {
  return (
    <Layout group="404">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                404 Not Found
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>404</strong>
          <small>This page doesn't exist.</small>
        </h1>
      </header>
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
    </Layout>
  );
}

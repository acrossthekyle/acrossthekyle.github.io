import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Heading, Small, Strong } from '@/ui/typography';

export default function View() {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{route('now').text}</Strong>
        <Small>{route('now').subtitle}</Small>
      </Heading>
      <p>
        Reading "Death's End" by Liu Cixin and "A Clash of Kings" by George R.R. Martin.
      </p>
      <p>
        Doing daily yoga practices and morning walks along the lakefront.
      </p>
      <p>
        Rewatching "Star Trek: Enterprise" on Paramount+, and binging "How I Met Your Mother" + "New Girl" on Hulu.
      </p>
    </Layout>
  );
}

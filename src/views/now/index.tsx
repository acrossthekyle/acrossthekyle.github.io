import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

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
      <h1>
        <strong>{route('now').text}</strong>
        <small>{route('now').subtitle}</small>
      </h1>
      <p>
        Reading "Death's End" by Liu Cixin and "A Clash of Kings" by George R.R. Martin.
      </p>
      <p>
        Doing daily yoga practices and morning walks along the lakefront
      </p>
      <p>
        Watching "A Knight of the Seven Kingdoms" on HBO Max and "Dark Matter" on Apple TV+, rewatching "Star Trek: Enterprise" on Paramount+, and binging "How I Met Your Mother" + "New Girl" on Hulu
      </p>
    </Layout>
  );
}

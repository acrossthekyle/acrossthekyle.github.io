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
        <strong>Now</strong>
        <small>Presntly doing</small>
      </h1>
      <section aria-label="introduction">
        <p>
          This is my little corner to share what I'm up to and what I'm focused on right now.
        </p>
      </section>
      <section aria-label="updates">
        <ul className="list">
          <li>
            Reading "The Dark Forest" by Liu Cixin, and "A Clash of Kings" by George R.R. Martin
          </li>
          <li>
            Daily 30-minute yoga videos with my partner
          </li>
          <li>
            Started rewatching Star Trek: Enterprise
          </li>
          <li>
            Planning a trip to Peru
          </li>
        </ul>
      </section>
      <section aria-label="status">
        <p>
          Last updated
          <small>January 26th, 2026</small>
        </p>
      </section>
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

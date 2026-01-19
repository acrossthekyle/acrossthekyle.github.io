import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="now">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" id="skip-to">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Now
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Now</strong>
          <small>As per the recommendation of the internet, here is my very own now page.</small><br />
          <small>
            <Link href="https://nownownow.com/about" target="_blank">nownownow.com</Link>
          </small>
        </h1>
      </header>
      <article>
        <h2>
          What I'm doing:
        </h2>
        <ul className={styles.list}>
          <li>
            Reading "The Dark Forest" by Liu Cixin, and "A Clash of Kings" by George R.R. Martin
          </li>
          <li>
            Wrapped up a re-watch of Star Trek: Voyager
          </li>
          <li>
            Planning a trip to Peru
          </li>
        </ul>
        <p>
          <small>Last updated:<br /><em>January 18, 2026</em></small>
        </p>
      </article>
    </Layout>
  );
}

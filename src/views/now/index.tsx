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
      <p>
        This is my little corner to share what I'm up to and what I'm focused on right now.
      </p>
      <h2 id="reading">
        <strong>Reading</strong>
      </h2>
      <ul aria-labelledby="reading" className="list">
        <li>
          "The Dark Forest" by Liu Cixin
        </li>
        <li>
          "A Clash of Kings" by George R.R. Martin
        </li>
      </ul>
      <h2 id="health">
        <strong>Health</strong>
      </h2>
      <ul aria-labelledby="health" className="list">
        <li>
          Daily yoga practices
        </li>
        <li>
          Aiming for 10,000 steps each day
        </li>
      </ul>
      <h2 id="entertainment">
        <strong>Entertainment</strong>
      </h2>
      <ul aria-labelledby="entertainment" className="list">
        <li>
          Rewatching "Star Trek: Enterprise"
        </li>
        <li>
          "Dark Matter" on Apple TV+
        </li>
        <li>
          Binging "How I Met Your Mother"
        </li>
      </ul>
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

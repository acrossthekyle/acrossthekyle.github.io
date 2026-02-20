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
      <h1>
        <strong>{route('now').text}</strong>
        <small>{route('now').subtitle}</small>
      </h1>
      <h2 id="reading">
        <strong>Reading</strong>
      </h2>
      <ul aria-labelledby="reading">
        <li>
          "Death's End" by Liu Cixin
        </li>
        <li>
          "A Clash of Kings" by George R.R. Martin
        </li>
      </ul>
      <h2 id="health">
        <strong>Health</strong>
      </h2>
      <ul aria-labelledby="health">
        <li>
          Daily yoga practices
        </li>
        <li>
          Morning walks along the lakefront
        </li>
      </ul>
      <h2 id="entertainment">
        <strong>Entertainment</strong>
      </h2>
      <ul aria-labelledby="entertainment">
        <li>
          "A Knight of the Seven Kingdoms" on HBO Max
        </li>
        <li>
          Rewatching "Star Trek: Enterprise" on Paramount+
        </li>
        <li>
          "Dark Matter" on Apple TV+
        </li>
        <li>
          Binging "How I Met Your Mother" on Hulu
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

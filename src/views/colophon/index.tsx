import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';

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
        <strong>{route('colophon').text}</strong>
        <small>{route('colophon').subtitle}</small>
      </h1>
      <p>
        This site is built with <Link href="https://nextjs.org" target="_blank"><u><LinkArrow>NextJs</LinkArrow></u></Link>, and styled with a combination of pure css and <Link href="https://tailwindcss.com" target="_blank"><u><LinkArrow>TailwindCSS</LinkArrow></u></Link>. It's deployed via <Link href="https://vercel.com" target="_blank"><u><LinkArrow>Vercel</LinkArrow></u></Link> with both static, and dynamically driven, content.
      </p>
      <p>
        The pages are server-side rendered where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via <Link href="https://www.json.org/json-en.html" target="_blank"><u><LinkArrow>JSON</LinkArrow></u></Link> and <Link href="https://www.markdownguide.org" target="_blank"><u><LinkArrow>Markdown</LinkArrow></u></Link> files, and a bash script compiles them into a set of cached database files.
      </p>
      <p>
        Icons are provided by the <Link href="https://lucide.dev" target="_blank"><u><LinkArrow>Lucide</LinkArrow></u></Link> icon library.
      </p>
      <p>
        The font used on this website is monospace.
      </p>
      <p>
        The content on this site is perfected by machines based off of outlines and rough-draft content provided by me, the human.
      </p>
      <p>
        I took heavy inspiration from websites found in the <Link href="https://deadsimplesites.com" target="_blank"><u><LinkArrow>DeadSimpleSites</LinkArrow></u></Link> collection.
      </p>
    </Layout>
  );
}

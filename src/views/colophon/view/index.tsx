import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>Colophon</strong>
        <small>Website philosophy</small>
      </h1>
      <p>
        A colophon (KOL-uh-fuhn) is where creators tell the world how they made something; a practice dating back to ancient times.
      </p>
      <p>
        Print publishing continued this tradition and it eventually made its way into digital and web publishing. If you like exploring page source code to see how websites are made, this is for you. Let's dive in.
      </p>
      <h2>
        <strong>TECHNICALS</strong>
      </h2>
      <p>
        This site is built with <Link href="https://nextjs.org" target="_blank"><u><LinkArrow>NextJs</LinkArrow></u></Link>, and styled with a combination of pure css and <Link href="https://tailwindcss.com" target="_blank"><u><LinkArrow>TailwindCSS</LinkArrow></u></Link>. It's deployed via <Link href="https://vercel.com" target="_blank"><u><LinkArrow>Vercel</LinkArrow></u></Link> with both static, and dynamically driven, content.
      </p>
      <p>
        The pages are server-side rendered where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via <Link href="https://www.json.org/json-en.html" target="_blank"><u><LinkArrow>JSON</LinkArrow></u></Link> and <Link href="https://www.markdownguide.org" target="_blank"><u><LinkArrow>Markdown</LinkArrow></u></Link> files, and a bash script combiles them into a cached database file.
      </p>
      <p>
        Icons are provided by the <Link href="https://lucide.dev" target="_blank"><u><LinkArrow>Lucide</LinkArrow></u></Link> icon library.
      </p>
      <h2>
        <strong>TYPOGRAPHY</strong>
      </h2>
      <p>
        The font used on this website is monospace.
      </p>
      <h2>
        <strong>WORDS</strong>
      </h2>
      <p>
        I'm not a writer, at all. So, most of the content on this site is perfected by machines based off of outlines and rough-draft content provided by me, the human.
      </p>
      <h2>
        <strong>DESIGN</strong>
      </h2>
      <p>
        Nor am I a designer, and I took heavy inspiration from websites found in the <Link href="https://deadsimplesites.com" target="_blank"><u><LinkArrow>DeadSimpleSites</LinkArrow></u></Link> collection.
      </p>
      <p>
        But, as an informally trained architect from primary schooling, I do believe in the philosophy of "less is more", and try to keep the design elements of my personal site minimalistic.
      </p>
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

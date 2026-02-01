import Link from 'next/link';

import { Layout } from '@/layout';
import { LinkArrow } from '@/ui/link';

export default function View() {
  return (
    <Layout group="colophon">
      <section>
        <h2><strong>What is a "Colophon"?</strong></h2>
        <p>
          A colophon (<em>KOL-uh-fuhn</em>) is where creators tell the world how they made something; a practice dating back to ancient times.
        </p>
        <p>
          Print publishing continued this tradition and it eventually made its way into digital and web publishing. If you like exploring page source code to see how websites are made, this is for you. Let's dive in.
        </p>
      </section>
      <section>
        <h2><strong>Technicals</strong></h2>
        <p>
          This site is built with <Link href="https://nextjs.org" target="_blank"><strong><u><LinkArrow>NextJs</LinkArrow></u></strong></Link>, and styled with a combination of pure css and <Link href="https://tailwindcss.com" target="_blank"><strong><u><LinkArrow>TailwindCSS</LinkArrow></u></strong></Link>. It's deployed via <Link href="https://vercel.com" target="_blank"><strong><u><LinkArrow>Vercel</LinkArrow></u></strong></Link> with both static, and dynamically driven, content.
        </p>
        <p>
          The pages are server-side rendered where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via <Link href="https://www.json.org/json-en.html" target="_blank"><strong><u><LinkArrow>JSON</LinkArrow></u></strong></Link> and <Link href="https://www.markdownguide.org" target="_blank"><strong><u><LinkArrow>Markdown</LinkArrow></u></strong></Link> files, and a bash script combiles them into a cached database file.
        </p>
        <p>
          Icons are provided by the <Link href="https://lucide.dev" target="_blank"><strong><u><LinkArrow>Lucide</LinkArrow></u></strong></Link> icon library.
        </p>
      </section>
      <section>
        <h2><strong>Typography</strong></h2>
        <p>
          The font used on this website is Geist provided by Google Fonts, with both sans serif, serif, and monospace versions employed.
        </p>
        <p>
          I tried to balance the use of the serif version of the font family with the non-serif version, utilizing the italic style where it felt "artsy" or just felt right.
        </p>
        <p>
          Section headings are bold, with page headers being a larger font size, and subheaders (or subtitles) ranging from sans-serif to serif styling.
        </p>
      </section>
      <section>
        <h2><strong>Writing</strong></h2>
        <p>
          I'm not a writer, at all. So, most of the content on this site is perfected by machines based off of outlines and rough-draft content provided by me, the human.
        </p>
      </section>
      <section>
        <h2><strong>Design</strong></h2>
        <p>
          Nor am I a designer, and I took heavy inspiration from websites found in the <Link href="https://deadsimplesites.com" target="_blank"><strong><u><LinkArrow>DeadSimpleSites</LinkArrow></u></strong></Link> collection.
        </p>
        <p>
          But, as an informally trained architect from primary schooling, I do believe in the philosophy of "less is more", and try to keep the design elements of my personal site minimalistic.
        </p>
      </section>
    </Layout>
  );
}

'use client';

import Link from 'next/link';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';

import styles from './stylesheet';

export default function Footer() {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <footer className={styles.container}>
      <nav aria-label="supplementary navigation" className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <button
              aria-controls="colophon"
              aria-label="open colophon dialog"
              onClick={handleOnOpen}
              type="button"
            >
              Colophon
            </button>
          </li>
          <li>
            <Link
              aria-label="view instagram profile"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="/email">
              Email
            </Link>
          </li>
          <li>
            <Link
              aria-label="view codebase on github.com"
              href="https://github.com/acrossthekyle/acrossthekyle.github.io"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>
         © 2011 - {new Date().getFullYear()}. All rights reserved.
      </p>
      <Dialog
        id="colophon"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        ref={dialog}
      >
        <DialogHeader>
          <h2>
            <strong>Colophon</strong>
            <small>Notes on how this site was made and why</small>
          </h2>
          <DialogClose
            id="colophon"
            onClose={handleOnClose}
          />
        </DialogHeader>
        <DialogBody>
          <section>
            <h3>
              <strong>What is a "Colophon"?</strong>
            </h3>
            <br />
            <p>
              A colophon (<em>KOL-uh-fuhn</em>) is where creators tell the world how they made something; a practice dating back to ancient times.
            </p>
            <p>
              Print publishing continued this tradition and it eventually made its way into digital and web publishing. If you like exploring page source code to see how websites are made, this is for you. Let's dive in.
            </p>
          </section>
          <section>
            <h3>
              <strong>Technicals</strong>
            </h3>
            <br />
            <p>
              This site is built with <Link href="https://nextjs.org" target="_blank"><u><em>NextJs</em></u></Link>, and styled with a combination of pure css and <Link href="https://tailwindcss.com" target="_blank"><u><em>Tailwind CSS</em></u></Link>. It's deployed via <Link href="https://vercel.com" target="_blank"><u><em>Vercel</em></u></Link> with both static, and dynamically driven, content.
            </p>
            <p>
              The pages are server-side rendered where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via <Link href="https://www.json.org/json-en.html" target="_blank"><u><em>JSON</em></u></Link> and <Link href="https://www.markdownguide.org" target="_blank"><u><em>Markdown</em></u></Link> files, and a bash script combiles them into a cached database file.
            </p>
            <p>
              Icons are provided by the <Link href="https://lucide.dev" target="_blank"><u><em>Lucide</em></u></Link> icon library.
            </p>
          </section>
          <section>
            <h3>
              <strong>Typography</strong>
            </h3>
            <br />
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
            <h3>
              <strong>Writing</strong>
            </h3>
            <br />
            <p>
              I'm not a writer, at all. So, most of the content on this site is perfected by machines based off of outlines and rough-draft content provided by me, the human.
            </p>
          </section>
          <section>
            <h3>
              <strong>Design</strong>
            </h3>
            <br />
            <p>
              Nor am I a designer, and I took heavy inspiration from websites found in the <Link href="https://deadsimplesites.com" target="_blank"><u><em>Dead Simple Sites</em></u></Link> collection.
            </p>
            <p>
              But, as an informally trained architect from primary schooling, I do believe in the philosophy of "less is more", and try to keep the design elements of my personal site minimalistic.
            </p>
          </section>
        </DialogBody>
        <DialogFooter />
      </Dialog>
    </footer>
  );
}

import Link from 'next/link';

import { Main } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import Footer from '@/ui/views/info/footer';

import styles from './stylesheet';

export default function View() {
  return (
    <Main>
      <Header>
        <HeaderEyebrow>[ 01-X03 ]</HeaderEyebrow>
        <HeaderPrefix>
          <Link href="/info">Info</Link>
        </HeaderPrefix>
        <HeaderText>Colophon</HeaderText>
        <HeaderSubtitle>How it's made</HeaderSubtitle>
      </Header>
      <p className={styles.description}>
        <span className={styles.highlight}>Inspired by</span> websites found in the <span className={styles.highlight}>deadsimplesites.com collection</span>.
      </p>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.index}>[ 00-01 ]</span>
          Frameworks
        </h2>
        <p className={styles.paragraph}>
          This site is built with nextjs, and styled with a combination of pure css and tailwind. It's deployed via vercel with both static and dynamically driven content.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.index}>[ 00-02 ]</span>
          Content
        </h2>
        <p className={styles.paragraph}>
          The pages are server-side rendered using html and css where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via json and markdown files, and a bash script compiles them into a set of cached database files. Icons are provided by the lucide icon library.
        </p>
      </section>
      <Footer current="/info/colophon" />
    </Main>
  );
}

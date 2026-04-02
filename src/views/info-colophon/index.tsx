import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';
import Footer from '@/ui/views/info/footer';

import styles from './stylesheet';

export default function View() {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ 01-X03 ]</HeaderEyebrow>
        <HeaderPrefix>Info/</HeaderPrefix>Colophon
        <HeaderSubtitle>How it's made</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>Inspired by</Highlight> websites found in the <Highlight>deadsimplesites.com collection</Highlight>.
      </Introduction>
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
    </>
  );
}

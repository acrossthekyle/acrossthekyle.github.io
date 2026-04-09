import Link from 'next/link';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';

import styles from './stylesheet';

export default function View() {
  return (
    <Content>
      <div className={styles.definition} role="presentation">
        <span>What</span>
        <span>make's</span>
        <span>this</span>
        <span>website</span>
        <span>tick</span>
      </div>
      <Header>
        <HeaderEyebrow>[ 07 ]</HeaderEyebrow>
        <HeaderText>Colophon</HeaderText>
        <HeaderSubtitle>How it's made</HeaderSubtitle>
      </Header>
      <section className={styles.section}>
        <h2 className={styles.heading}>Inspired by others</h2>
        <p className={styles.paragraph}>
          Design ideas for this website came from multiple sources, with most found in the <Link href="https://deadsimplesites.com/" target="_blank"><ExternalIcon>deadsimplesites.com</ExternalIcon></Link> collection.
        </p>
        <p className={styles.paragraph}>
          This site is built with nextjs, and styled with a combination of pure css and tailwind. It's deployed via vercel with both static and dynamically driven content.
        </p>
        <p className={styles.paragraph}>
          The pages are server-side rendered using html and css where image and content optimization occur, with some client-side javascript rendering. The raw data behind these pages is maintained via json and markdown files, and a bash script compiles them into a set of cached database files. Icons are provided by the lucide icon library.
        </p>
      </section>
    </Content>
  );
}

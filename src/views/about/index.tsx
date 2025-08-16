import Link from 'next/link';

import Article from '@/ui/article';

import styles from './stylesheet';

export default function View() {
  return (
    <Article isFull>
      <header className={styles.group}>
        <h1 className={styles.text}>
          Whether I'm building <span className={`${styles.emphasis} ${styles.highlight}`}>software</span> or <span className={`${styles.emphasis} ${styles.highlight}`}>walking</span> across a mountain range<span className={styles.emphasis}>,</span> I'm always seeking new ways to <span className={`${styles.emphasis} ${styles.highlight}`}>move forward</span> with intention and curiosity.
        </h1>
      </header>
      <section className={styles.group}>
        <p className={styles.text}>
          Hey<span className={styles.emphasis}>,</span> I'm <span className={`${styles.emphasis} ${styles.highlight}`}>Kyle</span><span className={styles.emphasis}>,</span> and I live in <span className={`${styles.emphasis} ${styles.highlight}`}>Chicago</span> with my partner and our dog <span className={`${styles.emphasis} ${styles.highlight}`}>Dax</span>.
        </p>
        <p className={styles.text}>
          I'm a full-time <span className={`${styles.emphasis} ${styles.highlight}`}>Frontend Developer</span>{' '}
          at{' '}
          <Link
            className={`${styles.anchor} ${styles.external}`}
            href="https://business.optum.com/en/"
            target="_blank"
          >
            <span className={styles.emphasis}>Optum Digital</span>
          </Link>{' '}
          with more than {new Date().getFullYear()-2012} years of insight<span className={styles.emphasis}>,</span> where my work impacts millions. Read up on{' '}
          <Link
            className={`${styles.anchor} ${styles.external}`}
            href="/acrossthekyle-resume.pdf"
            target="_blank"
          >
            <span className={styles.emphasis}>my career</span>
          </Link>.
        </p>
        <p className={styles.text}>
          When I'm not at a computer I'm disconnecting by <span className={`${styles.emphasis} ${styles.highlight}`}>thru-hiking</span> a long-distance trail somewhere.
        </p>
        <p className={styles.text}>
          Some hikes I've done include the <span className={`${styles.emphasis} ${styles.highlight}`}>Tour du Mont Blanc</span> in the Alps<span className={styles.emphasis}>,</span> the <span className={`${styles.emphasis} ${styles.highlight}`}>GR 20</span> in Corsica<span className={styles.emphasis}>,</span> the <span className={`${styles.emphasis} ${styles.highlight}`}>O Circuit</span> in Patagonia<span className={styles.emphasis}>,</span> and the <span className={`${styles.emphasis} ${styles.highlight}`}>basecamp + Annapurna Circuit</span> in Nepal.
        </p>
        <p className={styles.text}>
          Browse all of the{' '}
          <Link
            className={`${styles.anchor} ${styles.internal}`}
            href="/wanderings"
          >
            <span className={styles.emphasis}>trips and hikes</span>
          </Link>{' '}
          I've done
          <span className={styles.emphasis}>,</span> or if you want to get in touch you can{' '}
          <Link
            className={`${styles.anchor} ${styles.internal}`}
            href="/contact"
          >
            <span className={styles.emphasis}>Reach out</span>
          </Link>.
        </p>
      </section>
      <footer className={styles.group}>
        <p className={styles.text}>
          See you out there!
        </p>
      </footer>
    </Article>
  );
}

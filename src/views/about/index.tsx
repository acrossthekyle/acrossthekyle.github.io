import Link from 'next/link';

import Article from '@/ui/article';

import styles from './stylesheet';

export default function View() {
  const headerNodes = [
    <>Hey it's</>,
    <><span className={styles.emphasis}>Kyle!</span></>,
    <>I'm in</>,
    <><span className={styles.emphasis}>Chicago</span></>,
    <>Where I work</>,
    <>as a</>,
    <><span className={styles.emphasis}>Frontend</span></>,
    <><span className={styles.emphasis}>Developer</span></>,
    <>at Optum</>,
    <>Digital.</>,
    <><br /></>,
    <>I'm also a</>,
    <><span className={styles.emphasis}>thru-hiker.</span></>,
  ];

  return (
    <Article isFull>
      <header>
        <h1 className={styles.text}>
          Whether I'm building <span className={styles.emphasis}>software</span> or <span className={styles.emphasis}>walking</span> across a mountain range, I'm always seeking new ways to <span className={styles.emphasis}>move forward</span> with intention and <span className={styles.emphasis}>curiosity</span>.
        </h1>
      </header>
      <section>
        <p className={styles.text}>
          Hey, my name's <span className={styles.emphasis}>Kyle</span>, and I live in <span className={styles.emphasis}>Chicago</span> with my partner and our dog Dax.
        </p>
        <p className={styles.text}>
          I'm a full-time <span className={styles.emphasis}>Frontend Developer</span> with 13+ years of experience at Optum Digital where my work effects millions.
        </p>
        <p className={styles.text}>
          When I'm not at a computer I'm disconnecting and <span className={styles.emphasis}>thru-hiking</span> a long-distance trail somewhere.
        </p>
      </section>
      <footer>
        <Link
          className={styles.resume}
          href="/acrossthekyle-resume.pdf"
          target="_blank"
        >
          Learn more about what I do for a living here
        </Link>
      </footer>
    </Article>
  );
}

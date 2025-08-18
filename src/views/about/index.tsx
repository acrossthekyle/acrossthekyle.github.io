import Link from 'next/link';

import Section from '@/ui/section';

import styles from './stylesheet';

export default function View() {
  return (
    <Section className={styles.group} isFull>
      <p className={styles.text}>
        Whether I'm building software or walking across a mountain range, I'm always seeking new ways to move forward  with intention and curiosity.
      </p>
      <p className={styles.text}>
        Hey, I'm Kyle, and I live in Chicago with my partner and our dog Dax. When I'm not at a computer I'm disconnecting by thru-hiking a long-distance trail somewhere.
      </p>
      <p className={styles.text}>
        I'm a full-time Frontend Developer at{' '}
        <Link
          className={`${styles.anchor} ${styles.external}`}
          href="https://business.optum.com/en/"
          target="_blank"
        >
          Optum Digital
        </Link>{' '}
        with more than {new Date().getFullYear()-2012} years of insight, where my work impacts millions. Learn more on my{' '}
        <Link
          className={`${styles.anchor} ${styles.external}`}
          href="/acrossthekyle-resume.pdf"
          target="_blank"
        >
          resume
        </Link>.
      </p>
      <p className={styles.text}>
        Some hikes I've done include the Tour du Mont Blanc in the Alps, the GR 20 in Corsica, the O Circuit in Patagonia, and the Annapurna Basecamp & Circuit in Nepal.
      </p>
      <p className={styles.text}>
        Check out my{' '}
        <Link
          className={styles.anchor}
          href="/travels"
        >
          travels
        </Link>{' '}
        to see (nearly) everywhere I've been, or if you want to get in touch you can{' '}
        <Link
          className={styles.anchor}
          href="/contact"
        >
          reach out
        </Link>.
      </p>
      <p className={styles.text}>
        See you out there!
      </p>
    </Section>
  );
}

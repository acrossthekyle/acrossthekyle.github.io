import Link from 'next/link';

import Section from '@/ui/section';
import Title from '@/ui/title';

import styles from './stylesheet';

export default function View() {
  return (
    <Section className={styles.group} isFull>
      <Title className={styles.title}>About</Title>
      <h2 className={styles.heading}>
        Me<span className={styles.index}>01</span>
      </h2>
      <p className={styles.text}>
        Hey, I'm Kyle, and I live in Chicago with my partner and our dog Dax. When I'm not at a computer I'm disconnecting by thru-hiking a long-distance trail. Whether I'm building software or walking across a mountain range, I'm always seeking new ways to move forward  with intention and curiosity.
      </p>
      <h2 className={styles.heading}>
        Work<span className={styles.index}>02</span>
      </h2>
      <p className={styles.text}>
        I'm a full-time Frontend Developer at{' '}
        <Link
          className={`${styles.anchor} ${styles.external}`}
          href="https://business.optum.com/en/"
          target="_blank"
        >
          Optum Digital
        </Link>{' '}
        with more than {new Date().getFullYear()-2012} years of insight, where my work impacts millions. I have a passion for creating digital experiences with attention to detail, and an ability to adapt, allowing me to produce products and features that can be easily maintained for years. Learn more on my{' '}
        <Link
          className={`${styles.anchor} ${styles.external}`}
          href="/acrossthekyle-resume.pdf"
          target="_blank"
        >
          resume
        </Link>.
      </p>
      <h2 className={styles.heading}>
        Traveling<span className={styles.index}>03</span>
      </h2>
      <p className={styles.text}>
        Some hikes I've done include the Tour du Mont Blanc in the Alps, the GR 20 in Corsica, the O Circuit in Patagonia, and the Annapurna Basecamp & Circuit trek in Nepal. Check out my{' '}
        <Link
          className={styles.anchor}
          href="/travels"
        >
          travels
        </Link>{' '}
        to see a brief glimpse of (nearly) everywhere I've been.
      </p>
    </Section>
  );
}

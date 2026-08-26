import { ArrowUpRight } from 'lucide-react';

import Link from 'next/link';

import tw from '@/styles';

export default function Contact() {
  return (
    <article className={styles.container} id="connect">
      <h2 className={styles.heading}>
        <span className={styles.index}>Social Media / Email</span>
        Connect
      </h2>
      <p className={styles.paragraph}>
        Sometimes I post stuff on <Link
            className={styles.link}
            href="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            Instagram <ArrowUpRight className={styles.icon} />
          </Link>, but the best way to get in touch is via <Link
            className={styles.link}
            href="mailto:hello@acrossthekyle.com"
          >email <ArrowUpRight className={styles.icon} /></Link>.
      </p>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    mt-auto
  `,
  heading: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  paragraph: `
    max-full
    text-base
    mb-4

    last:mb-0

    sm:text-sm
    lg:text-xs
    lg:max-w-2/3
  `,
  link: `
    inline-flex items-center
    underline
  `,
  icon: `
    w-2.5 h-2.5
  `,
});

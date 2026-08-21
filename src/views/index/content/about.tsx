import { ArrowUpRight } from 'lucide-react';

import Link from 'next/link';

import tw from '@/styles';

export default function About() {
  return (
    <article className={styles.container} id="about">
      <h2 className={styles.header}>
        <span className={styles.index}>01</span>
        About
      </h2>
      <p className={styles.paragraph}>
        After spending hundreds of days and thousands of miles walking through forests, over mountains, and across entire countries, I'm still always seeking the next adventure – from the heights of the Himalayas in Nepal to the windswept expanses of Patagonia.
      </p>
      <p className={styles.paragraph}>
        Between adventures I moonlight as a self-taught <Link className={styles.link} href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com" target="_blank">software engineer <ArrowUpRight className={styles.icon} /></Link> with a thrill for writing code and creating user interfaces as a Sr. Software Engineer @ Optum.
      </p>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    border-b border-current/12.5
  `,
  header: `
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
    w-full
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

import Link from 'next/link';

import tw from '@/styles';

export default function Contact() {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.index}>03</span>
        Contact
      </h2>
      <p className={styles.paragraph}>
        Sometimes I post stuff on <Link
            className={styles.link}
            href="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            Instagram
          </Link>, but the best way to get in touch is via <Link
            className={styles.link}
            href="mailto:hello@acrossthekyle.com"
          >email</Link>.
      </p>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
  `,
  heading: `
    flex flex-row-reverse items-center justify-between
    mb-6
    uppercase
    font-black
    text-tiny
    tracking-wide
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  paragraph: `
    max-full
    text-xs
    mb-4

    last:mb-0

    lg:max-w-2/3
  `,
  link: `
    underline
  `,
});

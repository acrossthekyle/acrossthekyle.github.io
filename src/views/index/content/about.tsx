import Link from 'next/link';

import tw from '@/styles';

export default function About() {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.index}>01</span>
        About
      </h2>
      <p className={styles.paragraph}>
        After spending hundreds of days and thousands of miles walking through forests, over mountains, and across entire countries, I'm still always seeking the next adventure – from the heights of the Himalayas in Nepal to the windswept expanses of Patagonia.
      </p>
      <p className={styles.paragraph}>
        Between adventures I moonlight a self-taught <Link className={styles.link} href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com" target="_blank">software engineer</Link> with a thrill for writing code and creating user interfaces.
      </p>
    </article>
  );
};

const styles = tw({
  container: `
    p-6
    border-b border-current/12.5
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
    w-full
    text-xs
    mb-4

    last:mb-0

    lg:max-w-2/3
  `,
  link: `
    underline
  `,
});

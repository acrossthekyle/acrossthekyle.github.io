import Link from 'next/link';

import tw from '@/styles';

export default function Header() {
  return (
    <>
      <h2 className={styles.container}>
        Index
      </h2>
      <Link className={styles.link} href="mailto:hello@acrossthekyle.com">
        hello@acrossthekyle.com
      </Link>
    </>
  );
};

const styles = tw({
  container: `
    px-6 pt-5 pb-0.25
    text-base
    uppercase
    font-black
  `,
  link: `
    w-30
    ml-6 mb-5
    text-xs text-current/75

    sm:text-tiny
  `,
})

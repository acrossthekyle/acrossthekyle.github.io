import { Asterisk } from 'lucide-react';

import tw from '@/styles';

export default function Header() {
  return (
    <h2 className={styles.container}>
      <span className={styles.prefix}>
        <Asterisk className={styles.icon} />
        <span className={styles.availability}>
          Open for any<br />collaborations or offers
        </span>
      </span>
      <span className={styles.suffix}>
        KYL<span className={styles.copyrighted}>©</span>
      </span>
    </h2>
  );
};

const styles = tw({
  container: `
    flex items-center justify-between
    p-4 pt-5 pr-24
  `,
  prefix: `
    flex items-center
  `,
  icon: `
    size-10
    stroke-1
  `,
  availability: `
    text-xs
    font-light

    sm:text-tiny
    xl:text-xs
  `,
  suffix: `
    relative
    flex items-center gap-1
    font-semibold
    text-3xl
    tracking-tighter
  `,
  copyrighted: `
    absolute top-1 -right-3.5
    text-xs
  `,
});

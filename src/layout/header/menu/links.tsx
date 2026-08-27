import { ArrowUpRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Links({ isActive, onClick }: Props) {
  return (
    <nav
      aria-label="site supplementary navigation"
      className={styles.navigation}
    >
      <ul className={styles.items}>
        <li>
          <Link
            className={`${styles.link(isActive)} ${styles.index}`}
            onClick={onClick}
            href="/"
          >
            <span className={styles.prefix}>Go to</span>
            Index
            <MoveRight className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link(isActive)} ${styles.email}`}
            onClick={onClick}
            href="mailto:hello@acrossthekyle.com"
          >
            <span className={styles.prefix}>Drop me an</span>
            Email
            <ArrowUpRight className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link(isActive)} ${styles.github}`}
            onClick={onClick}
            href="https://github.com/acrossthekyle/acrossthekyle.github.io"
            target="_blank"
          >
            <span className={styles.prefix}>View code on</span>
            Github
            <ArrowUpRight className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link(isActive)} ${styles.instagram}`}
            onClick={onClick}
            href="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            <span className={styles.prefix}>Follow me on</span>
            Instagram
            <ArrowUpRight className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link(isActive)} ${styles.linkedin}`}
            onClick={onClick}
            href="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com"
            target="_blank"
          >
            <span className={styles.prefix}>Say hello on</span>
            LinkedIn
            <ArrowUpRight className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = tw({
  navigation: `
    flex flex-col items-end
    mt-10
    p-6
  `,
  items: `
    flex flex-col items-end gap-6
    text-xs
    font-semibold
    uppercase
    tracking-wider

    sm:text-xtiny
  `,
  link: (isActive: boolean) => tw(`
    relative
    flex items-center gap-2
    w-fit
    px-3 py-1
    text-xs
    uppercase
    tracking-wider
    border border-current/22.5
    rounded-xs
    pointer-events-auto
    ${isActive ? 'right-0 opacity-100' : 'right-20 opacity-0'}

    motion-safe:duration-300

    hover:bg-(--foreground)/5

    sm:text-tiny
    sm:px-2
    sm:py-0
  `),
  prefix: `
    text-current/50
    font-light
  `,
  icon: `
    w-3
    stroke-2
  `,
  index: `
    delay-100
  `,
  email: `
    delay-130
  `,
  github: `
    delay-160
  `,
  instagram: `
    delay-190
  `,
  linkedin: `
    delay-220
  `,
})

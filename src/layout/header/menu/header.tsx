import Link from 'next/link';

import tw from '@/styles';

type Props = {
  onClick: () => void;
};

export default function Header({ onClick }: Props) {
  return (
    <>
      <h2 className={styles.container}>
        Site Index
      </h2>
      <nav
        aria-label="site supplementary navigation"
        className={styles.navigation}
      >
        <span className={styles.prefix}>Jump to:</span>
        <ul className={styles.items}>
          <li>
            <Link
              className={styles.link}
              onClick={onClick}
              href="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              onClick={onClick}
              href="/#travels"
            >
              Travels
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              onClick={onClick}
              href="/#connect"
            >
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

const styles = tw({
  container: `
    px-6 pt-5
    text-base
    uppercase
    font-black
  `,
  navigation: `
    flex items-center gap-2
    ml-6 mt-1
  `,
  prefix: `
    text-tiny
    uppercase
    text-current/75

    lg:text-xtiny
  `,
  items: `
    flex items-center gap-3
    text-tiny
    uppercase
    tracking-wider

    lg:text-xtiny
  `,
  link: `
    border-b border-transparent

    motion-safe:duration-300

    hover:border-current
  `,
})

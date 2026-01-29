import Link from 'next/link';

import { Image } from '@/ui/image';

import Menu from './menu';
import Navigation from './navigation';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  route?: string;
};

export default function Header({ route }: Props) {
  return (
    <>
      <header className={styles.container}>
        <Link
          aria-label="acrossthekyle.com home"
          className={styles.anchor}
          href="/"
        >
          <Image
            alt=""
            height={540}
            sizes="100vw"
            src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
            width={960}
          />
        </Link>
        <nav aria-label="main navigation">
          <Navigation className={styles.list} route={route} />
          <Menu route={route} />
          <Theme className={styles.theme} />
        </nav>
      </header>
    </>
  );
}

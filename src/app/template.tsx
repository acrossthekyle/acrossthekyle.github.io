'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from 'scss/app/app.module.scss'

type Props = {
  children: React.ReactNode;
  details: React.ReactNode;
};

export default function Template({ children, details }: Props) {
	const pathname = usePathname();

  return (
  	<main className={styles.main}>
	  	<header>
	      <Link href="/" aria-label="home">
	        <div />
	      </Link>
	      <h1>
	        Thru-hiker by design
	      </h1>
	      <h2>
	        Developer by trade
	      </h2>
	      <h3>Chicago</h3>
	    </header>
	    <section>
	      <aside>
	        <nav>
			      <Link data-active={pathname === '/'} href="/">Kyle Gilbert</Link>
			      <Link data-active={pathname.includes('thru-hikes')} href="/thru-hikes">Thru-hikes</Link>
			      <Link data-active={pathname.includes('gear')} href="/gear">Gear Lists</Link>
			      <Link data-active={pathname.includes('travels')} href="/travels">Travels</Link>
			      <Link data-active={pathname === '/table-of-contents'} href="/table-of-contents">Index</Link>
			      <Link data-active={pathname === '/about'} href="/about">About</Link>
			      <Link data-active={pathname === '/settings'} href="/settings">Settings</Link>
			    </nav>
			    <section>
			    	{details}
			    </section>
	      </aside>
	      {children}
	    </section>
    </main>
  );
};

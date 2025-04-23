import { parse } from 'date-fns';
import { flatten, uniq } from 'lodash';
import Link from 'next/link';

import { posts } from '@/cache/posts';
import Constants from '@/constants';
import Styles from '@/styles';

import Categories from '../../categories';
import Image from '../../image';
import Shortcuts from '../../shortcuts';
import Contact from './contact';
import Theme from './theme';

const scss = Styles.Components.View.Components.Footer;

function Footer() {
  const categories = uniq(flatten(posts.map(({ categories }) => categories)));

  return (
    <footer className={scss.footer}>
      <div className={scss.columns}>
        <div className={scss.column}>
          <h2>About Me</h2>
          <p>
            My thru-hiking journey began in 2018, with the iconic 500-mile
            Camino de Santiago...
          </p>
          <h2>Categories</h2>
          <Categories
            className={scss.categories}
            items={[...categories, 'stage']}
            mode="secondary"
          />
        </div>
        <div className={scss.column}>
          <h2>Recent Posts</h2>
          {posts
            .slice(0, 3)
            .map(({ date, image, title, uri }, index: number) => (
              <figure className={scss.recent} key={title}>
                <Link className={scss.image} href={uri}>
                  <Image
                    alt=""
                    aria-describedby={`post${index}`}
                    height={80}
                    quality={40}
                    sizes="15vw"
                    src={image}
                    width={80}
                  />
                </Link>
                <span aria-hidden="true" className={scss.count}>
                  {index + 1}
                </span>
                <figcaption className={scss.caption}>
                  <span className={scss.date}>{date}</span>
                  <h4 className={scss.heading} id={`recent${index}`}>
                    <Link className={scss.title} href={uri}>
                      {title}
                    </Link>
                  </h4>
                </figcaption>
              </figure>
            ))}
        </div>
        <div className={scss.column}>
          <h2>Contact</h2>
          <Contact />
        </div>
      </div>
      <Shortcuts
        childClassName={scss.link}
        hasArrows={false}
        parentClassName={scss.links}
      />
      <div className={scss.bottom}>
        <span className={scss.copyright}>
          © 1987 - 2024{' '}
          <Link href="https://www.acrossthekyle.com">Kyle Gilbert</Link>. All
          Rights Reserved. Published with{' '}
          <Link href="https://vercel.com/" target="_blank" rel="noreferrer">
            Vercel
          </Link>
          . View the code on{' '}
          <Link
            href="https://github.com/acrossthekyle/acrossthekyle.github.io"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          . See you out there.
        </span>
        <Theme />
      </div>
    </footer>
  );
}

export default Footer;

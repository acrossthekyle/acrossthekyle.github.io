import Link from 'next/link';

import Constants from '@/constants';
import Styles from '@/styles';

import Image from '../../image';
import Loading from '../../loading';
import Shortcuts from '../../shortcuts/shortcuts';
import Tags from '../../tags';
import Contact from './contact';
import Theme from './theme';
import { useViewModel } from './footer.viewModel';

const scss = Styles.Components.View.Components.Footer;

function Footer() {
  const {
    isPostsLoading,
    isPostsReady,
    isTagsLoading,
    isTagsReady,
    posts,
    tags,
  } = useViewModel();

  return (
    <footer className={scss.footer}>
      <div className={scss.columns}>
        <div className={scss.column}>
          <h2>About Me</h2>
          <p>{Constants.ABOUT_ME_BLURB}</p>
          <h2>Tags</h2>
          {isTagsLoading && <Loading />}
          {isTagsReady && (
            <Tags className={scss.tags} items={tags} mode="secondary" />
          )}
        </div>
        <div className={scss.column}>
          <h2>Recent Posts</h2>
          {isPostsLoading && <Loading />}
          {isPostsReady && (
            <>
              {posts.map(({ date, image, title, uri }, index: number) => (
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
            </>
          )}
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

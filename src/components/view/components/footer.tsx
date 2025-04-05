import Link from 'next/link';

import Constants from '@/constants';
import { usePostsTagsData, useRecentPostsData } from '@/data/posts';
import styles from '@/styles/components/view/components/footer.module.scss';

import Image from '../../image';
import Loading from '../../loading';
import Shortcuts from '../../shortcuts/shortcuts';
import Tags from '../../tags';
import Contact from './contact';
import Theme from './theme';

function Footer() {
  const {
    data: tags,
    isLoading: isTagsLoading,
    isReady: isTagsReady,
  } = usePostsTagsData();
  const { data, isLoading, isReady } = useRecentPostsData();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>About Me</h3>
          <p>{Constants.ABOUT_ME_BLURB}</p>
          <h3>Tags</h3>
          {isTagsLoading && <Loading />}
          {isTagsReady && (
            <Tags className={styles.tags} items={tags} mode="secondary" />
          )}
        </div>
        <div className={styles.column}>
          <h3>Recent Posts</h3>
          {isLoading && <Loading />}
          {isReady && (
            <>
              {data.map(({ date, image, title, uri }, index: number) => (
                <figure className={styles.recent} key={title}>
                  <Link className={styles.image} href={uri}>
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
                  <span aria-hidden="true" className={styles.count}>
                    {index + 1}
                  </span>
                  <figcaption className={styles.caption}>
                    <span className={styles.date}>{date}</span>
                    <h2 id={`recent${index}`}>
                      <Link className={styles.title} href={uri}>
                        {title}
                      </Link>
                    </h2>
                  </figcaption>
                </figure>
              ))}
            </>
          )}
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <Contact />
        </div>
      </div>
      <Shortcuts
        childClassName={styles.link}
        hasArrows={false}
        parentClassName={styles.links}
      />
      <div className={styles.bottom}>
        <span className={styles.copyright}>
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

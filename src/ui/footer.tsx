import Link from 'next/link';

import styles from '@/styles/ui/footer.module.scss';

import { ABOUT_ME_BLURB } from '../constants';
import posts from '../posts';

import ContactForm from './contact';
import WatchIcon from './icons/watch';
import InstagramIcon from './icons/instagram';
import ShopIcon from './icons/shop';
import Image from './image';
import GitHubLink from './links/github';
import ResumeLink from './links/resume';
import Tags from './tags';
import Theme from './theme';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>About Me</h3>
          <p>{ABOUT_ME_BLURB}</p>
          <h3>Tags</h3>
          <Tags
            className={styles.tags}
            items={posts.getTags()}
            mode="secondary"
          />
        </div>
        <div className={styles.column}>
          <h3>Recent Posts</h3>
          {posts
            .getRecents()
            .map(({ date, image, uri, title }, index: number) => (
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
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <ContactForm />
        </div>
      </div>

      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://instagram.com/acrossthekyle"
          rel="noreferrer"
          target="_blank"
          title="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          className={styles.link}
          href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
          rel="noreferrer"
          target="_blank"
          title="Garmin apps"
        >
          <WatchIcon />
        </a>
        <Link className={styles.link} href="/shop" title="Shop">
          <ShopIcon />
        </Link>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 1987 - 2024{' '}
          <Link href="https://www.acrossthekyle.com">Kyle Gilbert</Link>. All
          Rights Reserved. View my <ResumeLink />. Published with{' '}
          <Link href="https://vercel.com/" target="_blank" rel="noreferrer">
            Vercel
          </Link>
          . View the code on <GitHubLink />. See you out there.
        </span>
        <Theme />
      </div>
    </footer>
  );
}

export default Footer;

import Link from 'next/link';

import styles from '@/styles/ui/footer.module.scss';

import posts from '../posts';

import ContactForm from './contact';
import GarminIcon from './icons/garmin';
import InstagramIcon from './icons/instagram';
import ShopIcon from './icons/shop';
import Image from './image';
import Tags from './tags';
import Theme from './theme';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>About Me</h3>
          <p>
            My name is Kyle Gilbert. I'm a thru-hiker / programmer based in
            Chicago, and I backpack around the world.
          </p>
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
          <GarminIcon />
        </a>
        <Link className={styles.link} href="/shop" title="Shop">
          <ShopIcon />
        </Link>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 1987 - 2024{' '}
          <a href="https://www.acrossthekyle.com">Kyle Gilbert</a>. All Rights
          Reserved. Published with{' '}
          <a href="https://vercel.com/" target="_blank" rel="noreferrer">
            Vercel
          </a>
          . See you out there.
        </span>
        <Theme />
      </div>
    </footer>
  );
}

export default Footer;

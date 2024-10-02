import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/pages/home/index.module.scss';
import EtsyIcon from '@/ui/icons/etsy';
import GarminIcon from '@/ui/icons/garmin';
import InstagramIcon from '@/ui/icons/instagram';
import Image from '@/ui/image';
import View from '@/ui/view';
import Skeleton from '@/ui/skeleton';
import Posts from '@/ui/posts';

function Page() {
  return (
    <View>
      <Head>
        <title>Kyle &mdash; Thru-hiker and Programmer based in Chicago</title>
      </Head>
      <div className={styles.container}>
        <Link className={styles.image} href="/about">
          <Image
            alt="me"
            height={432}
            sizes="25vw"
            src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
            width={768}
          />
        </Link>
        <h2 className={styles.title}>Kyle Gilbert</h2>
        <p className={styles.text}>
          My name is Kyle Gilbert. I'm a thru-hiker / programmer based in
          Chicago, and I backpack around the world.
        </p>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://instagram.com/acrossthekyle"
            rel="noreferrer"
            target="_blank"
            title="Follow me on Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            className={styles.link}
            href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
            rel="noreferrer"
            target="_blank"
            title="View my Garmin apps"
          >
            <GarminIcon />
          </a>
          <a
            className={styles.link}
            href="https://acrossthekyle.etsy.com"
            rel="noreferrer"
            target="_blank"
            title="View my Etsy shop"
          >
            <EtsyIcon />
          </a>
        </div>
      </div>
      <Posts />
    </View>
  );
}

export default Page;

import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/pages/home/index.module.scss';
import { Post } from '@/types/post';
import GarminIcon from '@/ui/icons/garmin';
import InstagramIcon from '@/ui/icons/instagram';
import ShopIcon from '@/ui/icons/shop';
import Figure from '@/ui/figure';
import Image from '@/ui/image';
import Masonry from '@/ui/masonry';
import View from '@/ui/view';
import Skeleton from '@/ui/skeleton';

import posts from '../../posts';

function Page() {
  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Thru-hiker and Programmer based in Chicago</title>
      </Head>
      <div className={styles.header}>
        <Link aria-hidden="true" className={styles.image} href="/about">
          <Image
            alt=""
            height={432}
            sizes="25vw"
            src="2024/06/28/defda5d6-f42b-4415-9e73-bdba4f19c8a5.jpeg"
            width={768}
          />
        </Link>
        <h1 className={styles.title}>Kyle Gilbert</h1>
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
      </div>
      <Masonry
        items={posts.getItems()}
        renderItem={(item: Post, index: number) => (
          <Figure
            date={item.date}
            image={item.image}
            preview={item.snippet}
            tags={item.tags.split(',')}
            title={item.title}
            uri={item.uri}
          />
        )}
      />
    </View>
  );
}

export default Page;

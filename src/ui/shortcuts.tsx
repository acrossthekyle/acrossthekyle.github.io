import Link from 'next/link';

import styles from '@/styles/ui/shortcuts.module.scss';
import External from './external';
import BackpackIcon from './icons/backpack';
import InstagramIcon from './icons/instagram';
import ShopIcon from './icons/shop';
import UserIcon from './icons/user';
import WatchIcon from './icons/watch';

type Props = {
  childClassName: string;
  hasArrows?: boolean;
  parentClassName: string;
  shouldLabel?: boolean;
};

function Shortcuts({
  childClassName,
  hasArrows = true,
  parentClassName,
  shouldLabel,
}: Props) {
  return (
    <div className={`${styles.links} ${parentClassName}`}>
      <Link
        className={`${styles.link} ${childClassName}`}
        href="/about"
        title="About me"
      >
        <UserIcon />
        {shouldLabel && <span className={styles.site}>About</span>}
      </Link>
      <Link
        className={`${styles.link} ${childClassName}`}
        href="/packs"
        title="Packs"
      >
        <BackpackIcon className={styles.backpack} />
        {shouldLabel && <span className={styles.site}>Packs</span>}
      </Link>
      <Link
        className={`${styles.link} ${childClassName}`}
        href="/shop"
        title="Shop prints"
      >
        <ShopIcon />
        {shouldLabel && <span className={styles.site}>Shop</span>}
      </Link>
      <External
        className={`${styles.link} ${childClassName}`}
        hasArrow={hasArrows}
        text={
          <>
            <InstagramIcon />
            {shouldLabel && <span className={styles.site}>Instagram</span>}
          </>
        }
        title="Instagram"
        url="https://instagram.com/acrossthekyle"
      />
      <External
        className={`${styles.link} ${childClassName}`}
        hasArrow={hasArrows}
        text={
          <>
            <WatchIcon className={styles.icon} />
            {shouldLabel && <span className={styles.site}>Garmin</span>}
          </>
        }
        title="Garmin apps"
        url="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
      />
    </div>
  );
}

export default Shortcuts;

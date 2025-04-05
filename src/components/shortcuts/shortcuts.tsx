import Link from 'next/link';

import Images from '@/images';
import styles from '@/styles/components/shortcuts/shortcuts.module.scss';

import External from './external';

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
        href="/me"
        title="About me"
      >
        <Images.Icons.User />
        {shouldLabel && <span className={styles.site}>About Me</span>}
      </Link>
      <Link
        className={`${styles.link} ${childClassName}`}
        href="/packs"
        title="Packs"
      >
        <Images.Icons.Backpack className={styles.backpack} />
        {shouldLabel && <span className={styles.site}>Packs</span>}
      </Link>
      <Link
        className={`${styles.link} ${childClassName}`}
        href="/store"
        title="Store"
      >
        <Images.Icons.Store />
        {shouldLabel && <span className={styles.site}>Buy Prints</span>}
      </Link>
      <External
        className={`${styles.link} ${childClassName}`}
        hasArrow={hasArrows}
        text={
          <>
            <Images.Icons.Instagram />
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
            <Images.Icons.Watch className={styles.icon} />
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

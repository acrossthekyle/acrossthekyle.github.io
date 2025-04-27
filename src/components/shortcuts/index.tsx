import Link from 'next/link';

import Images from '@/images';
import Styles from '@/styles';

const scss = Styles.Components.Shortcuts.Shortcuts;

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
    <div className={`${scss.links} ${parentClassName}`}>
      <Link
        className={`${scss.link} ${childClassName}`}
        href="/me"
        title="About me"
      >
        <Images.Icons.User />
        {shouldLabel && <span className={scss.site}>Me</span>}
      </Link>
      <Link
        className={`${scss.link} ${childClassName}`}
        href="/packs"
        title="Packs"
      >
        <Images.Icons.Backpack className={scss.backpack} />
        {shouldLabel && <span className={scss.site}>Packs</span>}
      </Link>
      <Link
        className={`${scss.link} ${childClassName}`}
        href="/store"
        title="Prints"
      >
        <Images.Icons.Store />
        {shouldLabel && <span className={scss.site}>Prints</span>}
      </Link>
      <External
        className={`${scss.link} ${childClassName}`}
        hasArrow={hasArrows}
        text={
          <>
            <Images.Icons.Instagram />
            {shouldLabel && <span className={scss.site}>Instagram</span>}
          </>
        }
        title="Instagram"
        url="https://instagram.com/acrossthekyle"
      />
      <External
        className={`${scss.link} ${childClassName}`}
        hasArrow={hasArrows}
        text={
          <>
            <Images.Icons.Watch className={scss.icon} />
            {shouldLabel && <span className={scss.site}>Garmin</span>}
          </>
        }
        title="Garmin apps"
        url="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
      />
    </div>
  );
}

export default Shortcuts;

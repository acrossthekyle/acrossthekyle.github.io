import Images from '@/images';
import Styles from '@/styles';
import type { Packs } from '@/types';

const scss = Styles.Pages.Packs.PageComponentAside;

type Props = {
  activeId?: string;
  canBrowse: boolean;
  onPackClick: (pack: Packs.Pack) => void;
  onViewStatsClick: () => void;
  packs: Packs.Pack[];
};

function Component({
  activeId,
  canBrowse,
  onPackClick,
  onViewStatsClick,
  packs,
}: Props) {
  return (
    <aside className={scss.aside} data-browse-packs={canBrowse}>
      <button className={scss.toggle} onClick={onViewStatsClick} type="button">
        Back to stats <Images.Icons.Arrow right />
      </button>
      <div className={`${scss.packs} ${canBrowse ? scss.visible : ''}`.trim()}>
        <ul>
          {(packs || []).map((pack) => (
            <li className={scss.pack} key={pack.slug}>
              <button
                className={scss.link}
                data-active={activeId === pack.slug}
                onClick={() => onPackClick(pack)}
                type="button"
              >
                <p className={scss.header}>{pack.title}</p>
                <p className={scss.type}>{pack.type}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Component;

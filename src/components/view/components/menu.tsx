import Link from 'next/link';

import Styles from '@/styles';

import Navigation from './navigation';

import { useViewModel } from './menu.viewModel';

const scss = Styles.Components.View.Components.Menu;

function Menu() {
  const { handleOnClose, handleOnLinkClick, handleOnOpen, isActive } =
    useViewModel();

  return (
    <>
      <button
        aria-label="Open menu"
        className={scss.menuButton}
        id="menuOpen"
        onClick={handleOnOpen}
        title="Open Menu"
        type="button"
      >
        <div aria-hidden="true" className={scss.icon} />
      </button>
      <div className={scss.menu} data-active={isActive}>
        <div
          aria-labelledby="menuHeading"
          aria-modal="true"
          className={scss.content}
          role="dialog"
          tabIndex={-1}
        >
          <div className={scss.circle}>
            <div className={scss.wrapper}>
              <button
                aria-label="Close menu"
                className={scss.close}
                id="menuClose"
                onClick={handleOnClose}
                title="Close menu"
                type="button"
              >
                <div aria-hidden="true" className={scss.icon} />
              </button>
              <h2 id="menuHeading">Menu</h2>
              <Navigation
                linkClassName={scss.link}
                onClick={handleOnLinkClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;

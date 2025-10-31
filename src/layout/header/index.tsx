'use client';

import Breadcrumbs from './breadcrumbs';
import Logo from './logo';
import { Menu, MenuItem, MenuLink, MenuText } from './menu';
import { useModel } from './model';
import Search from './search';
import Theme from './theme';
import styles from './stylesheet';

export default function Header() {
  const { isOnGrandChild, isOnRoot, routes } = useModel();

  return (
    <header className={styles.header(isOnRoot, isOnGrandChild)}>
      <Logo />
      <Breadcrumbs />
      <Search />
      <Theme />
      <Menu>
        {routes.map((route, index: number) => (
          <MenuItem index={index} key={index}>
            <MenuLink
              href={route.path}
              isActive={route.isActive}
              label={route.label}
            >
              <MenuText index={index} words={[route.text]} />
            </MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
}

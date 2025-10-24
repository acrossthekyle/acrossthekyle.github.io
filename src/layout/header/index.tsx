'use client';

import Back from './back';
import Logo from './logo';
import { Menu, MenuItem, MenuLink, MenuText } from './menu';
import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const { isOnRoot, routes } = useModel();

  return (
    <header className={styles.header(isOnRoot)}>
      <Logo />
      <Back />
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

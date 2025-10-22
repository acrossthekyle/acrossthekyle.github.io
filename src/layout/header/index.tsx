'use client';

import Back from './back';
import Logo from './logo';
import { Menu, MenuItem, MenuLink } from './menu';
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
            <MenuLink href={route.base} isActive={route.isActive}>
              {route.text}
            </MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
}

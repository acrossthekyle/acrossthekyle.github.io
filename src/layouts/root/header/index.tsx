'use client';

import Close from './close';
import Logo from './logo';
import { Menu, MenuItem, MenuLink } from './menu';
import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    isOnParent,
    isOnRoot,
    routes,
  } = useModel();

  return (
    <header className={styles.header(isOnRoot, isOnParent)}>
      <Logo />
      <Close />
      <Menu>
        {routes.map((route, index: number) => (
          <MenuItem index={index} key={index}>
            <MenuLink href={route.path} isActive={route.isActive}>
              {route.text}
            </MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
}

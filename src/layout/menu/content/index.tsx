'use client';

import { useMenu } from '@/hooks/useMenu';

import Anchor from './anchor';
import Local from './local';
import { styles } from './stylesheet';
import Theme from './theme';

export default function Content() {
  const { isActive, onClose } = useMenu();

  const handleOnClose = () => {
    setTimeout(() => {
      onClose();
    }, 150);
  };

  return (
    <div className={styles.container(isActive)}>
      <Theme />
      <Local />
      <h2 className={styles.header} id="dialog-header">
        Menu
      </h2>
      <nav aria-label="main navigation">
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Anchor id="index" index="01" onClick={handleOnClose} />
          </li>
          <li className={styles.item}>
            <Anchor id="archives" index="02" onClick={handleOnClose} />
          </li>
          <li className={styles.item}>
            <Anchor id="upcoming" index="03" onClick={handleOnClose} />
          </li>
          <li className={styles.item}>
            <Anchor id="email" index="04" />
          </li>
          <li className={styles.item}>
            <Anchor id="social" index="05" />
          </li>
          <li className={styles.item}>
            <Anchor id="resume" index="06" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

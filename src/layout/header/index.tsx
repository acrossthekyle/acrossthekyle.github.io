'use client';

import { Menu as Icon } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import type { Collection } from '@/types';

import Menu from '../menu';
import styles from './stylesheet';

type Props = {
  collections: Collection[];
};

export default function Header({ collections }: Props) {
  const { onDialog } = useDialog();

  const handleOnMenu = () => {
    onDialog({
      data: {
        collections,
      },
      template: 'menu',
    });
  };

  return (
    <header>
      <button className={styles.menu} onClick={handleOnMenu} type="button">
        <Icon className={styles.icon} />
      </button>
      <nav className={styles.container}>
        <Menu collections={collections} />
      </nav>
    </header>
  );
}

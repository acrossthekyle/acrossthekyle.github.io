'use client';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';
import {
  Categories,
  Collection,
  Find,
  Image,
  Info,
  Options,
} from './templates';

export default function Dialog() {
  const {
    data,
    dialog,
    isOpen,
    onBackdrop,
    onCancel,
  } = useDialog();

  return (
    <dialog
      aria-labelledby="dialog-header"
      className={`${styles.container} ${isOpen ? 'is-active' : ''}`.trim()}
      closedby="none"
      onClick={onBackdrop}
      ref={dialog}
      onKeyDown={onCancel}
    >
      {data.template === 'categories' && (
        <Categories data={data.data} />
      )}
      {data.template === 'collection' && (
        <Collection data={data.data} />
      )}
      {data.template === 'find' && (
        <Find data={data.data} />
      )}
      {data.template === 'image' && (
        <Image data={data.data} />
      )}
      {data.template === 'info' && (
        <Info />
      )}
      {data.template === 'options' && (
        <Options />
      )}
    </dialog>
  );
}

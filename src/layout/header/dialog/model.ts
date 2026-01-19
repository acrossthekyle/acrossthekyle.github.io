'use client';

import {
  SyntheticEvent,
  useRef,
  useState,
} from 'react';

export function useModel() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [isDialogActive, setIsDialogActive] = useState(false);

  const handleOnDialogOpen = () => {
    dialogRef.current?.showModal();

    requestAnimationFrame(() => setIsDialogActive(true));
  };

  const handleOnDialogClose = () => {
    setIsDialogActive(false);

    const handleTransitionEnd = () => {
      dialogRef.current?.close();

      dialogRef.current?.removeEventListener('transitionend', handleTransitionEnd);
    };

    dialogRef.current?.addEventListener('transitionend', handleTransitionEnd);
  };

  const handleOnDialogCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();

    handleOnDialogClose();
  };

  return {
    dialogRef,
    handleOnDialogCancel,
    handleOnDialogClose,
    handleOnDialogOpen,
    isDialogActive,
  };
};

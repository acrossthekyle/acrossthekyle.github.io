import { PropsWithChildren } from 'react';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';

type Props = {
  className?: string;
  isActive: boolean;
};

export default function Mountable({
  children,
  className = '',
  isActive,
}: PropsWithChildren<Props>) {
  const { isOpen } = useDialog();

  return (
    <div className={`${styles.container(isActive, isOpen)} ${className}`.trim()}>
      {children}
    </div>
  );
}

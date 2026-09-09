'use client';

import { Copy, CopyCheck } from 'lucide-react';

import { useCopy } from '@/hooks/useCopy';
import tw from '@/styles';

type Props = {
  value: string;
};

export default function Clipboard({
  children,
  value,
}: React.PropsWithChildren<Props>) {
  const { handleCopy, isCopied } = useCopy();

  return (
    <button
      className={styles.container}
      onClick={() => handleCopy(value)}
      type="button"
    >
      {children}
      {isCopied ? (
        <CopyCheck className={styles.icon} />
      ) : (
        <Copy className={styles.icon} />
      )}
    </button>
  );
};

const styles = tw({
  container: `
    inline-flex items-center gap-1
  `,
  icon: `
    w-3 h-3
    stroke-1
  `,
});

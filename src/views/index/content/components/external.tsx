import { ArrowUpRight } from 'lucide-react';

import Link from 'next/link';

import tw from '@/styles';

type Props = {
  url: string;
};

export default function External({
  children,
  url,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      className={styles.container}
      href={url}
      target="_blank"
      >
        {children} <ArrowUpRight className={styles.icon} />
    </Link>
  );
};

const styles = tw({
  container: `
    inline-flex items-center
    underline
  `,
  icon: `
    w-2.5 h-2.5
  `,
});

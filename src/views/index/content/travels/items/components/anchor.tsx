import Link from 'next/link';

import tw from '@/styles';

type Props = {
  id: string;
};

export default function Anchor({
  children,
  id,
}: React.PropsWithChildren<Props>) {
  return (
    <Link className={styles.container} href={`/travels/${id}`}>
      {children}
    </Link>
  );
};

const styles = tw({
  container: `
    group
    relative
    flex flex-col
    text-base

    before:absolute
    before:-inset-2
    before:rounded-sm
    before:bg-(--foreground)/5
    before:opacity-0
    motion-safe:before:duration-300

    hover:before:opacity-100

    sm:text-sm
  `,
});

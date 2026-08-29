import { MoveRight } from 'lucide-react';

import tw from '@/styles';

type Props = {
  value: string | string[];
};

export default function Title({
  children,
  value,
}: React.PropsWithChildren<Props>) {
  return (
    <span className={styles.container}>
      {Array.isArray(value) ? (
        <>
          {value[0]}
          <MoveRight aria-hidden="true" className={styles.icon} />
          {value[1]}
        </>
      ) : (
        <>{value}</>
      )}
      {children}
    </span>
  );
};

const styles = tw({
  container: `
    flex flex-wrap items-center
  `,
  icon: `
    w-2.5 h-2.5
    mx-2
    stroke-3
  `,
});

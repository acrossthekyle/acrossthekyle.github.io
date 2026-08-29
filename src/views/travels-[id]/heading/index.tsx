import tw from '@/styles';
import type { Data } from '@/types';

import Header from './header';
import Navigation from './navigation';

type Props = {
  travel: Data;
};

export default function Heading({ travel }: Props) {
  return (
    <header className={styles.container}>
      <Header travel={travel} />
      <Navigation travel={travel} />
    </header>
  );
};

const styles = tw({
  container: `
    col-span-1 order-0
    flex flex-col justify-end
    h-svh
    p-6

    landscape-constrained:h-auto
    landscape-constrained:mt-14

    lg:border-r
    lg:border-current/12.5
  `,
});

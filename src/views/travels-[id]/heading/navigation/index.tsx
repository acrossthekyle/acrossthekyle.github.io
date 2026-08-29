import tw from '@/styles';
import type { Data } from '@/types';

import Back from './back';
import Category from './category';

type Props = {
  travel: Data;
};

export default function Navigation({ travel }: Props) {
  return (
    <nav aria-label="supplementary navigation" className={styles.container}>
      <Back />
      <Category travel={travel} />
    </nav>
  );
};

const styles = tw({
  container: `
    flex flex-col gap-2
    mt-6

    xs:flex-row
    xs:gap-4
  `,
});

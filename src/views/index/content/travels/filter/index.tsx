import tw from '@/styles';

import Select from './select';
import Toggle from './toggle';

type Props = {
  filterBy: string;
  onChange: (value: string) => void;
};

export default function Filter({ filterBy, onChange }: Props) {
  return (
    <nav className={styles.container}>
      <Select filterBy={filterBy} onChange={onChange} />
      <Toggle filterBy={filterBy} />
    </nav>
  );
};

const styles = tw({
  container: `
    group
    absolute top-6 right-6 z-2
    flex items-center justify-end gap-2
    mb-6

    lg:gap-1
    lg:top-6
  `,
});

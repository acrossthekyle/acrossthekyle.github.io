import { X } from 'lucide-react';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  isExpanded: boolean;
};

export default function Close({
  isActive,
  isExpanded,
}: Props) {
  return (
    <>
      {isActive && !isExpanded && (
        <X aria-hidden="true" className={styles.icon} role="presentation" />
      )}
    </>
  );
};

const styles = tw({
  icon: `
    absolute top-4 right-4 z-10
    size-6
    stroke-1 stroke-white

    lg:size-4
  `,
});

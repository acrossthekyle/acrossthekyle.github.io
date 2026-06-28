import type { Stat } from '@/types';

type Props = {
  isSmall?: boolean;
  value: Stat;
};

export default function Length({ isSmall, value }: Props) {
  return (
    <>
      {value['imperial']} {isSmall ? 'ft' : 'miles'}
    </>
  );
}

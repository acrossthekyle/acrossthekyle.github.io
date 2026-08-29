import { formatNumber } from './utils';

type Props = {
  isCompact?: boolean;
  isSmall?: boolean;
  value: number;
};

export default function Length({ isCompact, isSmall, value }: Props) {
  return (
    <>
      {formatNumber(value, isCompact)} {isSmall ? 'ft' : 'mi'}
    </>
  );
}

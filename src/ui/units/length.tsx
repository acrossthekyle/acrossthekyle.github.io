type Props = {
  isCompact?: boolean;
  isSmall?: boolean;
  value: number;
};

function formatNumber(value: number, isCompact?: boolean) {
  return new Intl.NumberFormat('en', {
    notation: isCompact ? 'compact' : 'standard',
    compactDisplay: isCompact ? 'short' : undefined,
  // @ts-expect-error - format is correct
  }).format(value.toFixed(0));
};

export default function Length({ isCompact, isSmall, value }: Props) {
  return (
    <>
      {formatNumber(value, isCompact)} {isSmall ? 'ft' : 'mi'}
    </>
  );
}

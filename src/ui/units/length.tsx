type Props = {
  isSmall?: boolean;
  value: number;
};

function formatNumber(value: number) {
  // @ts-expect-error - format is correct
  return new Intl.NumberFormat().format(value.toFixed(0));
};

export default function Length({ isSmall, value }: Props) {
  return (
    <>
      {formatNumber(value)} {isSmall ? 'ft' : 'miles'}
    </>
  );
}

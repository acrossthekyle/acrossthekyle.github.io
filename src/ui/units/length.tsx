type Props = {
  isSmall?: boolean;
  value: number;
};

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

export default function Length({ isSmall, value }: Props) {
  return (
    <>
      {formatNumber(value)} {isSmall ? 'ft' : 'miles'}
    </>
  );
}

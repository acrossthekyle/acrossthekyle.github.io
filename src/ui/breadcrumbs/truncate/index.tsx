type Props = {
  maxLength?: number;
  text: string;
};

export default function Truncate({ maxLength = 25, text }: Props) {
  const suffix = '...';

  let result = text;

  if (text.length > maxLength) {
    const charsToShow = maxLength - suffix.length;
    const halfChars = Math.floor(charsToShow / 2);
    const start = text.substring(0, halfChars);
    const end = text.substring(text.length - halfChars);

    result = `${start}${suffix}${end}`;
  }

  return (
    <>
      {result}
    </>
  );
}

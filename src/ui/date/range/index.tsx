import type { Date } from '@/types';

type Props = {
  date: Date;
  isPreview?: boolean;
};

export default function Range({ date, isPreview }: Props) {
  return (
    <>
      {date.isYears && (
        <>
          {date.range[0]} <em>→</em> {date.range[1]}
        </>
      )}
      {!date.isYears && (
        <>
          {isPreview ? (
            <>
              {date.range[0]}
            </>
          ) : (
            <>
              {date.range[0]} <em>→</em> {date.range[1]}
            </>
          )}
        </>
      )}
    </>
  );
}

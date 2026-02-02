import type { Date } from '@/types';

type Props = {
  date: Date;
  preview?: boolean;
};

export default function Range({ date, preview }: Props) {
  return (
    <>
      {date.isYears && (
        <>
          {date.range[0]} <em>→</em> {date.range[1]}
        </>
      )}
      {!date.isYears && (
        <>
          {preview ? (
            <>
              {date.range[1].split(', ')[1]}
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

import type { Termini } from '@/types';

type Props = {
  termini: Termini;
};

export default function Range({ termini }: Props) {
  return (
    <>
      {termini.isSame ? (
        <>{termini.end.words.join(' ')}</>
      ) : (
        <>{termini.start.words.join(' ')} to {termini.end.words.join(' ')}</>
      )}
    </>
  );
}

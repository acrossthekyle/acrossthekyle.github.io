'use client';

import Auto from './auto';
import { useModel } from './model';
import Navigate from './navigate';
import Pills from './pills';

type Props = {
  current: number;
  onChange: (value: number) => void;
  total: number;
};

export default function Navigation({ current, onChange, total }: Props) {
  const {
    canAutoPlay,
    handleOnAuto,
    handleOnNext,
    handleOnPill,
    handleOnPrevious,
  } = useModel(current, onChange, total);

  return (
    <nav aria-label="supplementary navigation">
      <Navigate isPrevious onClick={handleOnPrevious} />
      <Auto canAutoPlay={canAutoPlay} onClick={handleOnAuto} />
      <Pills current={current} onClick={handleOnPill} total={total} />
      <Navigate onClick={handleOnNext} />
    </nav>
  );
};

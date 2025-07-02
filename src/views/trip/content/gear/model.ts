'use client';

import { useState } from 'react';

type Model = {
  handleOnSelect: (category: string | null, index: number | null) => void;
  selection: string | null;
  selectionIndex: number | null;
};

export const useModel = (): Model => {
  const [selection, setSelection] = useState<string | null>(null);
  const [selectionIndex, setSelectionIndex] = useState<number | null>(null);

  const handleOnSelect = (category: string | null, index: number | null) => {
    setSelection(category);
    setSelectionIndex(index);
  }

  return {
    handleOnSelect,
    selection,
    selectionIndex,
  };
};

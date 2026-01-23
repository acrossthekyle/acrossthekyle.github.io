export function getColSpan(total: number, index: number) {
  if (total === 1) {
    return 'col-span-7 md:col-span-3';
  }

  const mod6 = index % 6;

  // Pattern: 0, 4, 6, 10... (indices 0 and 4 within every set of 6)
  if (mod6 === 0 || mod6 === 4) {
    return 'col-span-4 md:col-span-2';
  }

  // Pattern: 2, 5, 8, 11... (indices 2 and 5 within every set of 6)
  if (mod6 === 2 || mod6 === 5) {
    return 'col-span-7 md:col-span-3';
  }

  return 'col-span-3 md:col-span-1';
}

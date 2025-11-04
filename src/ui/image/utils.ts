export function getAspectClassNames(index: number) {
  switch (index % 3) {
    case 0:
      // Indices 0, 3, 6
      return 'portrait:aspect-4/5 landscape:aspect-16/9 base:portrait:aspect-16/9 base:landscape:aspect-16/9';
    case 1:
      // Indices 1, 4, 7
      return 'portrait:aspect-11/8 landscape:aspect-16/9 base:portrait:aspect-16/9 base:landscape:aspect-16/9';
    default:
      // Indices 2, 5, 8
      return 'portrait:aspect-square landscape:aspect-16/9 base:portrait:aspect-16/9 base:landscape:aspect-16/9';
  }
};

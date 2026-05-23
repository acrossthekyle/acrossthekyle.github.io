export function padIndex(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export function trimCardinal(value: string) {
  return value.replace(/\b(North|South|East|West)\b/gi, (match: string) => {
    return match.charAt(0).toUpperCase() + '.';
  });
};

export function getDelay(parent: number, index: number) {
  const delays = [
    [0, 0.125, 0.25, 0.375, 0.625, 0.5],
    [0, 0.125, 0.25, 0.375, 0.5, 0.625],
  ];

  return delays[parent % 2][index];
};

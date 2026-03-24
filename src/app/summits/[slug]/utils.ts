export function getStageTitle(value: string) {
  const parts = value.split(' to ');

  return parts[0].trim() === parts[1].trim() ? parts[0] : parts[1];
};

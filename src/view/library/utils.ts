export function getDelay(imageIndex: number) {
  return [0.25, 0.125, 0.375, 0][imageIndex % 4];
}

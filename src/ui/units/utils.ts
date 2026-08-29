export function formatNumber(value: number, isCompact?: boolean) {
  return new Intl.NumberFormat('en', {
    notation: isCompact ? 'compact' : 'standard',
    compactDisplay: isCompact ? 'short' : undefined,
  // @ts-expect-error - format is correct
  }).format(value.toFixed(0));
};

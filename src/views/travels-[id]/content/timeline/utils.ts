export function title(raw: string) {
  if (raw.includes(' to ')) {
    return raw.split(' to ');
  }

  return raw;
}

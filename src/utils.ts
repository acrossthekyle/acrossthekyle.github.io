export function padIndex(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export function trimCardinal(value: string) {
  return value.replace(/\b(North|Northern|South|Southern|East|Eastern|West|Western)\b/gi, (match: string) => {
    return match.charAt(0).toUpperCase() + '.';
  });
};

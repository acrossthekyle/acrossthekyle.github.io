export function padIndex(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export function formatDateRange(
  date: { isYears: boolean; range: string[]; },
  onlyYear?: boolean,
) {
  return date.isYears
    ? `${date.range[0]}+`
    : onlyYear ? date.range[1].split(', ')[1] : `${date.range[0].split(',')[0].trim()} to ${date.range[1]}`;
};

export function uppercaseFirst(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

export function combineTermini(
  termini: {
    isSame: boolean;
    start: {
      words: string[];
    };
    end: {
      words: string[];
    };
  },
) {
  return termini.isSame
    ? termini.end.words.join(' ')
    : `${termini.start.words.join(' ')} to ${termini.end.words.join(' ')}`;
};

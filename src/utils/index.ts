export function convertFeetToMeters(value: number) {
  return Number((Number(value)/3.281).toFixed(0));
};

export function turnStringIntoArrayForList(value: string, limit = 12) {
  const parts = value.split(' ');
  const result = [''];

  let index = 0;

  parts.forEach((part: string) => {
    if (result[index].length < limit) {
      const combination = `${result[index]} ${part.trim()}`.trim();

      if (combination.length < limit) {
        result.splice(index, 1, combination);
      } else if (part.length > limit ) {
        result.splice(index, 1, part.trim());
      } else {
        ++index

        result.splice(index, 1, part.trim());
      }
    }
  });

  return result;
};

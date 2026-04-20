export function convertFeetToMeters(value: number) {
  return Number((Number(value)/3.281).toFixed(0));
};

export function padIndex(index: number, padding: number = 2) {
  return String(index).padStart(padding, '0');
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function formatDistance(raw: number, units: string, isMetric?: boolean) {
  if (isMetric) {
    if (units === 'miles') {
      return `${(raw * 1.609).toFixed(0)} kilometers`;
    }

    if (units === 'feet') {
      return `${(raw / 3.281).toFixed(0)} meters`;
    }
  }

  return `${raw.toFixed(0)} ${units}`;
}

export function getTravelId(urlParameter: string) {
  const parts = urlParameter.split('-');

  if (/\d/.test(parts[parts.length - 1])) {
    parts.pop();
  }

  return parts.join('-');
}

export function getTravelIdIndex(urlParameter: string) {
  const parts = urlParameter.split('-');

  if (/\d/.test(parts[parts.length - 1])) {
    return parseInt(parts[parts.length - 1], 10);
  }

  return 0;
}

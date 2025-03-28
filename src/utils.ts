export function getPostIdAndStageFromUriSegment(uriSegments: string[]) {
  const parts = (
    uriSegments[1].indexOf('#') > -1
      ? uriSegments[1].substring(0, uriSegments[1].indexOf('#'))
      : uriSegments[1]
  ).split('/');

  return {
    id: parts[0],
    stageIndex: parts.length > 1 ? Number(parts[1]) : -1,
  };
}

export function getUnitsLabelForGroup(units: string) {
  return units === 'metric' ? 'kg' : 'lbs';
}

export function getUnitsLabelForItem(units: string) {
  return units === 'metric' ? 'g' : 'oz';
}

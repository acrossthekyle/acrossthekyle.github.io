export function getLabel(type) {
  if (type === 'thru-hike') {
    return 'day';
  }

  if (type === 'section-hike') {
    return 'section';
  }

  if (type === 'peak-bagging') {
    return 'summit';
  }

  if (type === 'vacation') {
    return 'destination';
  }

  return '';
}

export function parseCoordinates(value: string) {
  const parts = value.split(',');

  let lat = parseFloat(parts[0]);
  let lng = parseFloat(parts[1]);

  if (parts[0].includes('S')) {
    lat = -lat;
  }

  if (parts[1].includes('W')) {
    lng = -lng;
  }

  return [lat, lng];
};

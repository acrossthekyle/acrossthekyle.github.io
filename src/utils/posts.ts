export function trimGpxCoordinates(gpx, everyThird = false) {
  const coordinates = [];

  gpx.features.forEach((feature) => {
    feature.geometry.coordinates.forEach((coordinate) => {
      if (Array.isArray(coordinate)) {
        coordinates.push(coordinate);
      }
    });
  });

  return coordinates
    .filter((_, index) => (everyThird ? index % 3 === 2 : index % 2 === 0))
    .filter((coordinate) => coordinate[0] !== null && coordinate[1] !== null)
    .map((coordinate) => [coordinate[1], coordinate[0]]);
}

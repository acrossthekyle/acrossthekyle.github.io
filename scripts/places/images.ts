/* eslint-disable */
// @ts-nocheck

export async function compile(place, stages) {
  const output = [];

  stages.forEach((stage) => {
    output.push({
      id: stage.id,
      placeId: place.id,
      path: stage.image,
    });
  });

  return output;
};

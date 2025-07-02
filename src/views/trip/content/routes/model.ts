import { type Trip } from '../../types';

type Model = {
  routes: [number, number][][],
};

export function useModel(trip: Trip): Model {
  return {
    routes: trip.stages.map((stage) => stage.route),
  };
};

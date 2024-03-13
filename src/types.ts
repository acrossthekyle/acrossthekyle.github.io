export type Trip = {
  countries: string[];
  days: string;
  gearLink?: string;
  id: string;
  image: string;
  itinerary?: TripItinerary[];
  mapBackgroundUrl?: string;
  mapUrl?: string;
  miles?: string;
  months: string[];
  mountains?: string[];
  title: string[];
};

export type TripItinerary = {
  elevationGainFeet?: number;
  elevationLossFeet?: number;
  miles: number;
  start: string;
  startAltitudeFeet?: number;
  stop: string;
  stopAltitudeFeet?: number;
  steps: number;
  tripActivityLink?: string;
};

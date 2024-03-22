export type Hike = {
  backdrop: string;
  countries: string[];
  days: string;
  gearLink?: string;
  id: string;
  image: string;
  itinerary?: HikeItinerary[];
  mapBackgroundUrl?: string;
  mapUrl?: string;
  miles?: string;
  months: string[];
  mountains?: string[];
  title: string[];
};

type HikeItinerary = {
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

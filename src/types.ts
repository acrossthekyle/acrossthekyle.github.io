export type GearItem = {
  category: string;
  type: string;
  name: string;
  weight: number;
  worn: boolean;
  consumable: boolean;
  link: string;
};

export type GearCategory = {
  category: string;
  items: GearItem[];
  weight: string;
};

export type Gear = {
  categories: GearCategory[];
  weightBase: string;
  weightConsumable: string;
  weightTotal: string;
  weightWorn: string;
};

export type Route = [number, number];

export type Stat = {
  label: string;
  value: string;
  units: string
};

export type Stage = {
  date: string;
  elevation: string[];
  hasStats: boolean;
  images: {
    hero: string;
  };
  index: number;
  latlong: string[];
  next: string | null;
  previous: string | null;
  slug: string;
  stats: {
    distance: Stat | null;
    gain: Stat | null;
    loss: Stat | null;
    max: Stat | null;
    time: Stat | null;
  };
  termini: {
    end: string;
    start: string;
  };
  title: string;
};

export type Coordinates = {
  left: string;
  top: string;
};

export type DateParts = {
  month: string;
  day: string;
  year: string;
};

export type Date = {
  dates: {
    start: {
      long: DateParts;
      short: DateParts;
    };
    end: {
      long: DateParts;
      short: DateParts;
    };
  };
  year: string[];
};

export type Trip = {
  categories: string[];
  coordinates: Coordinates;
  date: Date;
  description: string[];
  gear: Gear | null;
  hasGear: boolean;
  hasLatlong: boolean;
  hasRoutes: boolean;
  id: string;
  images: {
    hero: string;
    large: string;
    small: string;
  };
  index: number;
  label: string;
  latlong: string[][];
  location: string;
  next: string | null;
  previous: string | null;
  routes: Route[][] | null;
  slug: string;
  stages: Stage[];
  stats: Stat[];
  stats: {
    altitude: Stat | null;
    days: Stat;
    distance: Stat | null;
    length: Stat;
  };
  tagline: string;
  termini: {
    end: string;
    isSame: boolean;
    start: string;
  };
  timestamp: string;
  title: string;
  total: number;
  type: string;
};

export enum View {
  ImageWithMap = 0,
  ImageOverMap = 1,
  MapWithImage = 2,
}

export enum Overlay {
  None = 3,
  Gear = 4,
  List = 5,
}

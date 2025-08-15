export type GearItem = {
  category: string;
  name: string[];
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

// export type Coordinates = {
//   left: string;
//   top: string;
// };

export type DateParts = {
  month: string;
  day: string;
  year: string;
};

export type Dates = {
  start: {
    long: DateParts;
    short: DateParts;
  };
  end: {
    long: DateParts;
    short: DateParts;
  };
};

export type Date = {
  dates: Dates | null;
  year: string[];
};

// export type Navigation = {
//   date: Date;
//   slug: string;
//   title: string;
// };

export type Route = [number, number];

export type StatFull = {
  label: string;
  value: {
    imperial: string;
    metric: string;
  };
  units: {
    imperial: {
      full: string;
      abbreviated: string;
    };
    metric: {
      full: string;
      abbreviated: string;
    };
  };
};

export type StatShort = {
  label: string;
  value: string;
  units: string;
};

export type Termini = {
  end: string[];
  isSame: boolean;
  start: string[];
};

export type Stage = {
  date: {
    long: DateParts;
    short: DateParts;
  };
  hasStats: boolean;
  images: {
    hero: string;
    supplementary: string[];
  };
  index: number;
  location: string | null;
  // next: Navigation | null;
  // previous: Navigation | null;
  slug: string;
  stats: {
    distance: StatFull | null;
    gain: StatFull | null;
    loss: StatFull | null;
    max: StatFull | null;
    time: StatShort | null;
  };
  termini: Termini;
  title: string[];
};

export type Trip = {
  categories: string[];
  // coordinates: Coordinates;
  date: Date;
  description: string[];
  gear: Gear | null;
  hasGear: boolean;
  id: string;
  images: {
    hero: string;
    // large: string;
    // small: string;
  };
  index: number;
  label: string;
  location: string;
  // next: Navigation | null;
  // previous: Navigation | null;
  slug: string;
  stages: Stage[];
  stats: {
    altitude: StatFull | null;
    days: StatShort;
    distance: StatFull | null;
    length: StatShort;
  };
  // tagline: string;
  termini: Termini;
  timestamp: string;
  title: string[];
  // total: number;
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

export type Gpx = [number, number, number][];

export type GearItem = {
  name: string[];
  weight: number;
  link: string;
};

export type GearCategory = {
  title: string;
  items: GearItem[];
};

export type Gear = {
  categories: GearCategory[];
};

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
  end: {
    position: string | null;
    words: string[];
  };
  isSame: boolean;
  start: {
    position: string | null;
    words: string[];
  };
};

export type Stats = {
  distance: StatFull | null;
  gain: StatFull | null;
  loss: StatFull | null;
  max: StatFull | null;
  time: StatShort | null;
};

export type Stage = {
  date: string;
  description: string[];
  hasStats: boolean;
  image: string;
  index: string;
  readingTime: string;
  termini: Termini;
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
};

export type Navigation = {
  date: string;
  index: string;
  title: string[];
};

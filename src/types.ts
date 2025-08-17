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

export type StageImages = {
  hero: string;
  supplementary: string[];
};

export type Stage = {
  date: {
    long: DateParts;
    short: DateParts;
  };
  hasStats: boolean;
  images: StageImages;
  index: number;
  location: string | null;
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
  date: Date;
  description: string[];
  id: string;
  images: {
    hero: string;
  };
  index: number;
  label: string;
  location: string;
  slug: string;
  stages: Stage[];
  stats: {
    altitude: StatFull | null;
    days: StatShort;
    distance: StatFull | null;
    length: StatShort;
  };
  tagline: string;
  termini: Termini;
  timestamp: string;
  title: string[];
  type: string;
};

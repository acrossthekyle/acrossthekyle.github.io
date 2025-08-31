export type Date = {
  date: string | null;
  years: string[];
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
  end: string[];
  isSame: boolean;
  start: string[];
};

export type Images = {
  hero: string;
  supplementary: string[];
};

export type Stage = {
  date: string;
  hasStats: boolean;
  images: Images;
  index: number;
  location: string | null;
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

export type Travel = {
  date: Date;
  description: string[];
  index: number;
  label: string;
  location: string;
  slug: string;
  stages: Stage[];
  stats: {
    length: StatShort;
  };
  tagline: string;
  timestamp: string;
  title: string[];
  type: string;
};

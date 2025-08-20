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
  stats: {
    distance: StatFull | null;
    max: StatFull | null;
    time: StatShort | null;
  };
  termini: Termini;
  title: string[];
};

export type Trip = {
  date: Date;
  index: number;
  label: string;
  slug: string;
  stages: Stage[];
  stats: {
    length: StatShort;
  };
  timestamp: string;
  title: string[];
  type: string;
};

export type Filter = {
  count: number;
  filter: string;
  name: string;
};

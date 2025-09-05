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

export type Stage = {
  image: string;
  location: string;
  termini: Termini;
};

export type Data = {
  date: Date;
  description: string[];
  location: string;
  slug: string;
  stages: Stage[];
  stats: {
    altitude: StatFull | null;
    days: StatShort;
    distance: StatFull | null;
    length: StatShort;
  };
  title: string[];
  type: string;
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
};

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

export type Stats = {
  distance: StatFull | null;
  gain: StatFull | null;
  loss: StatFull | null;
  max: StatFull | null;
  time: StatShort | null;
};

export type Stage = {
  date: string;
  hasPost: boolean;
  hasStats: boolean;
  image: string;
  termini: Termini;
};

export type Post = {
  description: string[];
  slug: string;
  stages: Stage[];
  title: string[];
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
};

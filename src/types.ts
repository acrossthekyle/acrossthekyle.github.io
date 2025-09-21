export type Date = {
  date: string | null;
  years: string[];
};

export type Termini = {
  end: string[];
  isSame: boolean;
  start: string[];
};

export type Stage = {
  date: string;
  description?: string[];
  image: string;
  location: string;
  termini: Termini;
};

export type Data = {
  date: Date;
  description: string[];
  slug: string;
  stages: Stage[];
  title: string[];
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
};

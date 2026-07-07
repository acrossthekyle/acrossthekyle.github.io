export type Stat = {
  imperial: string;
  metric: string;
};

export type Location = {
  region: string;
  country: string;
  continent: string;
};

export type Image = {
  camera: string;
  category: string;
  collectionId: string;
  elevation: Stat;
  id: string;
  location: Location;
  notes: string[];
  src: string;
  thumb: string;
  title: string;
  when: {
    long: string[];
    short: string[];
  };
};

export type Cover = {
  src: string;
  thumb: string | null;
};

export type Collection = {
  category: string;
  coordinates: string;
  count: number;
  cover: Cover;
  header: string[];
  id: string;
  location: Location;
  notes: string[];
  title: string[];
  when: {
    long: string[];
    short: string[];
  };
};

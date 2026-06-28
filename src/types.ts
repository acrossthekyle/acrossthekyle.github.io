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

export type Collection = {
  category: string;
  coordinates: string;
  count: number;
  cover: {
    src: string;
    thumb: string | null;
  };
  header: Array<{
    classes?: string[];
    type: string;
    words?: string;
  }[]>;
  id: string;
  location: Location;
  title: string[];
  when: {
    long: string[];
    short: string[];
  };
};

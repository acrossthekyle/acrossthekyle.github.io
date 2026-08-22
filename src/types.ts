export type Location = {
  region: string;
  country: string;
  continent: string;
};

export type Image = {
  camera: string | null;
  category: string;
  collectionId: string;
  elevation: number;
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

export type Timeline = {
  label: string;
  title: string;
  data: {
    distance?: number;
    elevation?: number;
    gain?: number;
    loss?: number;
    summit?: number;
    time?: number;
  };
};

export type Landmark = {
  coordinates: string;
  label: string;
  title: string;
  orientation: string;
};

export type Cover = {
  src: string;
  thumb: string;
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
  year: string;
};

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
  when: string;
};

export type Collection = {
  category: string;
  coordinates: string;
  count: number;
  id: string;
  location: Location;
  notes: string[];
  position: string[];
  tags: string[];
  title: string[];
  type: string;
  when: string;
  year: string;
};

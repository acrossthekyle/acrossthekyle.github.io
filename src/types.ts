export type Stat = {
  imperial: string;
  metric: string;
};

export type Data = {
  camera: string;
  category: string;
  collection: {
    id: string;
    position: string[];
    title: string[];
  };
  elevation: Stat;
  location: {
    region: string;
    country: string;
    continent: string;
  };
  notes: string[];
  src: string;
  thumb: string;
  title: string;
  when: string;
};

export type Collection = {
  category: string;
  coordinates: string;
  cover: {
    src: string;
    thumb: string;
  };
  count: number;
  id: string;
  location: {
    country: string;
    continent: string;
  };
  notes: string[];
  position: string[];
  tags: string[];
  title: string[];
  when: string;
  year: string;
};

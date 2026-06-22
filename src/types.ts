export type Location = {
  region: string;
  country: string;
  continent: string;
};

export type Collection = {
  coordinates: string;
  count: number;
  id: string;
  location: Location;
  title: string[];
  when: {
    long: string[];
    short: string[];
  };
};

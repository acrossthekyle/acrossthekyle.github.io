export type ThruHike = {
  id: string;
  image: string;
  title: string;
  mountains: string[] | null;
  countries: string[];
  years: string[];
  months: string[];
  gearLink: string;
  stats: ThruHikeStat[];
};

export type ThruHikeStat = {
  title: string;
  value: string;
};

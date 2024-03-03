export type Section = {
  id: string;
  image: string;
  title: string;
  mountains: string[] | null;
  countries: string[];
  years: string[];
  months: string[];
  gearLink: string;
  stats: SectionStat[];
};

export type SectionStat = {
  title: string;
  value: string;
};

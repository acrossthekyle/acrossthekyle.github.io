type GearItem = {
  name: string[];
  weight: number;
  link: string;
};

type GearCategory = {
  title: string;
  items: GearItem[];
  weight: string;
};

export type Data = {
  base: string;
  categories: GearCategory[];
  date: string;
  title: string;
};

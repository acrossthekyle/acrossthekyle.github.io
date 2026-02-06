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
  categories: GearCategory[];
  slug: string;
  title: string[];
  weights: {
    base: string;
  };
};

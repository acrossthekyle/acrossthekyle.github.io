type GearItem = {
  consumable: boolean;
  link: string;
  name: string[];
  weight: number;
  worn: boolean;
};

type GearCategory = {
  items: GearItem[];
  title: string;
  weight: string;
};

export type Data = {
  base: string;
  categories: GearCategory[];
  consumable: string;
  date: string;
  slug: string;
  title: string;
  total: string;
  type?: string;
  worn: string;
};

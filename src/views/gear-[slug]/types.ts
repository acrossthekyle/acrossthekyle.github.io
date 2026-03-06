type GearItem = {
  consumable: boolean;
  link: string;
  name: string[];
  weight: {
    imperial: string | number;
    metric: string;
  };
  worn: boolean;
};

type GearCategory = {
  items: GearItem[];
  title: string;
  weight: {
    imperial: string | number;
    metric: string;
  };
};

export type Data = {
  base: {
    imperial: string | number;
    metric: string;
  };
  categories: GearCategory[];
  consumable: {
    imperial: string | number;
    metric: string;
  };
  date: string;
  slug: string;
  title: string;
  total: {
    imperial: string | number;
    metric: string;
  };
  type?: string;
  worn: {
    imperial: string | number;
    metric: string;
  };
};

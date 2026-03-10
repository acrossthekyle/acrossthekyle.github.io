type GearItem = {
  consumable: boolean;
  link: string;
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  worn: boolean;
};

type GearCategory = {
  items: GearItem[];
  title: string;
  weight: {
    imperial: string;
    metric: string;
  };
};

export type Data = {
  base: {
    imperial: string;
    metric: string;
  };
  categories: GearCategory[];
  consumable: {
    imperial: string;
    metric: string;
  };
  date: string;
  slug: string;
  title: string;
  total: {
    imperial: string;
    metric: string;
  };
  type?: string;
  worn: {
    imperial: string;
    metric: string;
  };
};
